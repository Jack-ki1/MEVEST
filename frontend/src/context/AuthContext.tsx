import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { User, Session } from '@supabase/supabase-js';
import { useDemo } from '@/context/DemoContext';
import { 
  ADMIN_ID, 
  ADMIN_STORAGE_KEY, 
  isAdminBypassEnabled 
} from './auth-config';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: unknown }>;
  signIn: (email: string, password: string) => Promise<{ error: unknown }>;
  resendConfirmation: (email: string) => Promise<{ error: unknown }>;
  resetPassword: (email: string) => Promise<{ error: unknown }>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

// Admin bypass helper functions
function createMockAdminUser(): User {
  const ADMIN_EMAIL = (import.meta.env.VITE_ADMIN_EMAIL as string | undefined)?.trim().toLowerCase() ?? '';
  const now = new Date().toISOString();
  return {
    id: ADMIN_ID,
    aud: 'authenticated',
    role: 'authenticated',
    email: ADMIN_EMAIL,
    email_confirmed_at: now,
    phone: '',
    confirmed_at: now,
    last_sign_in_at: now,
    app_metadata: { provider: 'email', providers: ['email'] },
    user_metadata: { full_name: 'Mevest Admin', role: 'admin' },
    identities: [],
    created_at: now,
    updated_at: now,
  } as unknown as User;
}

function createMockAdminSession(): Session {
  const user = createMockAdminUser();
  return {
    access_token: 'mock-admin-access-token',
    refresh_token: 'mock-admin-refresh-token',
    expires_in: 3600,
    expires_at: Math.floor(Date.now() / 1000) + 3600,
    token_type: 'bearer',
    user,
  } as unknown as Session;
}

function loadAdminSession(): { user: User; session: Session } | null {
  if (!isAdminBypassEnabled) return null;
  try {
    const raw = localStorage.getItem(ADMIN_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { user?: { id?: string }; session?: Session };
    if (parsed?.user?.id === ADMIN_ID && parsed?.session) return parsed as { user: User; session: Session };
  } catch (err) {
    console.warn('[Auth] Failed to load admin session', err);
  }
  return null;
}

function saveAdminSession(user: User, session: Session) {
  if (!isAdminBypassEnabled) return;
  try {
    localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify({ user, session }));
  } catch (err) {
    console.warn('[Auth] Failed to save admin session', err);
  }
}

function clearAdminSession() {
  try {
    localStorage.removeItem(ADMIN_STORAGE_KEY);
  } catch (err) {
    console.warn('[Auth] Failed to clear admin session', err);
  }
}

// Demo mode mock user
function createDemoUser(): User {
  const now = new Date().toISOString();
  return {
    id: 'demo-user-0000-0000-0000-000000000001',
    aud: 'authenticated',
    role: 'authenticated',
    email: 'demo@mevest.africa',
    email_confirmed_at: now,
    phone: '',
    confirmed_at: now,
    last_sign_in_at: now,
    app_metadata: { provider: 'email', providers: ['email'] },
    user_metadata: { full_name: 'Demo User', role: 'user' },
    identities: [],
    created_at: now,
    updated_at: now,
  } as unknown as User;
}

function createDemoSession(): Session {
  const user = createDemoUser();
  return {
    access_token: 'demo-access-token',
    refresh_token: 'demo-refresh-token',
    expires_in: 86400,
    expires_at: Math.floor(Date.now() / 1000) + 86400,
    token_type: 'bearer',
    user,
  } as unknown as Session;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { isDemoMode } = useDemo();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Demo mode: auto-login with demo user
    if (isDemoMode) {
      const demoUser = createDemoUser();
      const demoSession = createDemoSession();
      setUser(demoUser);
      setSession(demoSession);
      setLoading(false);
      return;
    }

    // 1. Check for persisted admin session first — instant login
    const admin = loadAdminSession();
    if (admin) {
      setUser(admin.user);
      setSession(admin.session);
      setLoading(false);
      return;
    }

    // 2. Otherwise follow normal Supabase auth
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, sess) => {
      // Don't overwrite admin session with null from Supabase
      if (loadAdminSession()) return;
      setSession(sess);
      setUser(sess?.user ?? null);
      setLoading(false);
    });

    supabase.auth.getSession().then(({ data: { session: sess } }) => {
      if (loadAdminSession()) return;
      setSession(sess);
      setUser(sess?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [isDemoMode]);

  const signUp = async (email: string, password: string, fullName: string) => {
    // Demo mode: prevent real signup
    if (isDemoMode) {
      return { error: { message: 'Sign up is disabled in demo mode. This is a read-only preview.' } };
    }
    
    const ADMIN_EMAIL = (import.meta.env.VITE_ADMIN_EMAIL as string | undefined)?.trim().toLowerCase() ?? '';
    // Block admin email from real signup when bypass is enabled
    if (isAdminBypassEnabled && email.trim().toLowerCase() === ADMIN_EMAIL) {
      return { error: { message: 'This email is reserved for admin access. Use Sign In with the admin password.' } };
    }
    const { error } = await supabase.auth.signUp({
      email: email.trim().toLowerCase(),
      password,
      options: {
        data: { full_name: fullName.trim() },
        emailRedirectTo: window.location.origin,
      },
    });
    return { error };
  };

  const signIn = async (email: string, password: string) => {
    // Demo mode: prevent real login
    if (isDemoMode) {
      return { error: { message: 'Login is disabled in demo mode. You are already logged in as Demo User.' } };
    }

    const cleanEmail = email.trim().toLowerCase();
    const ADMIN_EMAIL = (import.meta.env.VITE_ADMIN_EMAIL as string | undefined)?.trim().toLowerCase() ?? '';
    const ADMIN_PASSWORD = (import.meta.env.VITE_ADMIN_PASSWORD as string | undefined) ?? '';

    // Admin bypass: only when explicitly enabled via env
    if (isAdminBypassEnabled && cleanEmail === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const mockUser = createMockAdminUser();
      const mockSession = createMockAdminSession();
      saveAdminSession(mockUser, mockSession);
      setUser(mockUser);
      setSession(mockSession);
      return { error: null };
    }

    const { error } = await supabase.auth.signInWithPassword({ email: cleanEmail, password });
    return { error };
  };

  const resendConfirmation = async (email: string) => {
    if (isDemoMode) {
      return { error: { message: 'Email confirmation is disabled in demo mode.' } };
    }
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email: email.trim().toLowerCase(),
      options: { emailRedirectTo: window.location.origin },
    });
    return { error };
  };

  const resetPassword = async (email: string) => {
    // Demo mode: prevent password reset
    if (isDemoMode) {
      return { error: { message: 'Password reset is disabled in demo mode.' } };
    }
    
    // Admin uses mock auth — no reset via Supabase
    const ADMIN_EMAIL = (import.meta.env.VITE_ADMIN_EMAIL as string | undefined)?.trim().toLowerCase() ?? '';
    if (isAdminBypassEnabled && email.trim().toLowerCase() === ADMIN_EMAIL) {
      return { error: { message: 'Admin password is set via VITE_ADMIN_PASSWORD in .env. Change it there and restart the dev server.' } };
    }
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim().toLowerCase(), {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    return { error };
  };

  const signOut = async () => {
    // Demo mode: prevent logout
    if (isDemoMode) {
      return;
    }
    
    if (loadAdminSession()) {
      clearAdminSession();
      setUser(null);
      setSession(null);
      return;
    }
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, signUp, signIn, resendConfirmation, resetPassword, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}


