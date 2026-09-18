import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/useAuth';
import { useRealtimeMarket } from '@/context/RealtimeMarketContext';
import { useDemo } from '@/context/DemoContext';
import { DEMO_WATCHLIST } from '@/data/demo-data';

interface WatchlistContextType {
  watchlist: string[];
  addToWatchlist: (sym: string) => void;
  removeFromWatchlist: (sym: string) => void;
  isInWatchlist: (sym: string) => boolean;
}

export const WatchlistContext = createContext<WatchlistContextType | null>(null);

export function WatchlistProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const { isDemoMode } = useDemo();
  const { registerSymbols } = useRealtimeMarket();
  const [watchlist, setWatchlist] = useState<string[]>([]);

  const loadWatchlist = useCallback(async () => {
    // Demo mode: use sample watchlist
    if (isDemoMode) {
      setWatchlist(DEMO_WATCHLIST.map(w => w.sym));
      return;
    }

    if (!user) {
      try {
        const demo = localStorage.getItem('mevest_demo_watchlist');
        if (demo) setWatchlist(JSON.parse(demo));
        else setWatchlist([]);
      } catch (err) {
        console.warn('[Watchlist] demo cache parse failed', err);
        setWatchlist([]);
      }
      return;
    }
    
    try {
      const { data, error } = await supabase
        .from('watchlist_items')
        .select('symbol')
        .eq('user_id', user.id);
        
      if (!error && data) {
        setWatchlist(data.map((d: { symbol: string }) => d.symbol));
      } else if (error) {
        console.warn('[Watchlist] load failed, using cache:', error.message);
        try {
          const cached = localStorage.getItem(`mevest_watchlist_${user.id}`);
          if (cached) setWatchlist(JSON.parse(cached));
        } catch (err) {
          console.warn('[Watchlist] cache read failed', err);
        }
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.warn('[Watchlist] network error, using cache:', msg);
      try {
        const cached = localStorage.getItem(`mevest_watchlist_${user.id}`);
        if (cached) setWatchlist(JSON.parse(cached));
      } catch (cacheErr) {
        console.warn('[Watchlist] cache read failed', cacheErr);
      }
    }
  }, [user, isDemoMode]);

  useEffect(() => { loadWatchlist(); }, [loadWatchlist]);

  useEffect(() => {
    if (watchlist.length > 0) registerSymbols(watchlist);
  }, [watchlist, registerSymbols]);

  // Listen for data changes from AI chatbot
  useEffect(() => {
    const handler = () => loadWatchlist();
    window.addEventListener('mevest-data-changed', handler);
    return () => window.removeEventListener('mevest-data-changed', handler);
  }, [loadWatchlist]);

  const addToWatchlist = useCallback(async (sym: string) => {
    // Demo mode: just update state
    if (isDemoMode) {
      setWatchlist(prev => prev.includes(sym) ? prev : [...prev, sym]);
      return;
    }

    if (!user) return;
    setWatchlist(prev => {
      const next = prev.includes(sym) ? prev : [...prev, sym];
      try { localStorage.setItem(`mevest_watchlist_${user.id}`, JSON.stringify(next)); } catch (err) {
        console.warn('[Watchlist] cache write failed', err);
      }
      return next;
    });
    const { error } = await supabase.from('watchlist_items').upsert({ user_id: user.id, symbol: sym }, { onConflict: 'user_id,symbol' });
    if (error) console.warn('[Watchlist] upsert failed:', error.message);
  }, [user, isDemoMode]);

  const removeFromWatchlist = useCallback(async (sym: string) => {
    // Demo mode: just update state
    if (isDemoMode) {
      setWatchlist(prev => prev.filter(s => s !== sym));
      return;
    }

    if (!user) return;
    setWatchlist(prev => {
      const next = prev.filter(s => s !== sym);
      try { localStorage.setItem(`mevest_watchlist_${user.id}`, JSON.stringify(next)); } catch (err) {
        console.warn('[Watchlist] cache write failed', err);
      }
      return next;
    });
    const { error } = await supabase.from('watchlist_items').delete().eq('user_id', user.id).eq('symbol', sym);
    if (error) console.warn('[Watchlist] delete failed:', error.message);
  }, [user, isDemoMode]);

  const isInWatchlist = useCallback((sym: string) => watchlist.includes(sym), [watchlist]);

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
}
