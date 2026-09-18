import React, { createContext, useContext, useState } from 'react';

interface DemoContextType {
  isDemoMode: boolean;
  enableDemoMode: () => void;
  disableDemoMode: () => void;
}

const DemoContext = createContext<DemoContextType | null>(null);

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const [isDemoMode, setIsDemoMode] = useState(() => {
    // Auto-enable demo mode if Supabase is not configured
    const hasSupabase = import.meta.env.VITE_SUPABASE_URL && 
                       !import.meta.env.VITE_SUPABASE_ANON_KEY?.includes('placeholder') &&
                       !import.meta.env.VITE_SUPABASE_ANON_KEY?.includes('your_supabase');
    return !hasSupabase || localStorage.getItem('mevest_demo_mode') === 'true';
  });

  const enableDemoMode = () => {
    setIsDemoMode(true);
    localStorage.setItem('mevest_demo_mode', 'true');
  };

  const disableDemoMode = () => {
    setIsDemoMode(false);
    localStorage.removeItem('mevest_demo_mode');
  };

  return (
    <DemoContext.Provider value={{ isDemoMode, enableDemoMode, disableDemoMode }}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error('useDemo must be used within DemoProvider');
  return ctx;
}
