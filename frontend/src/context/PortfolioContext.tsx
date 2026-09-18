import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/useAuth';
import { useRealtimeMarket } from '@/context/RealtimeMarketContext';
import { useDemo } from '@/context/DemoContext';
import { DEMO_HOLDINGS } from '@/data/demo-data';

export interface Holding {
  sym: string;
  name: string;
  type: string;
  shares: number;
  cost: number;
  price: number;
  sector: string;
  country: string;
  color: string;
}

interface PortfolioContextType {
  holdings: Holding[];
  addHolding: (h: Omit<Holding, 'price' | 'sector' | 'country' | 'color'>) => void;
  removeHolding: (sym: string) => void;
  loading: boolean;
}

export const PortfolioContext = createContext<PortfolioContextType | null>(null);

const COLORS = ['#5b9cf6','#63d2aa','#a78bfa','#f5a623','#f0616b','#fb8c5a','#26c6da','#ec4899'];

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const { isDemoMode } = useDemo();
  const { registerSymbols } = useRealtimeMarket();
  const [holdings, setHoldings] = useState<Holding[]>([]);
  const [loading, setLoading] = useState(true);

  const loadHoldings = useCallback(async () => {
    // Demo mode: use sample holdings
    if (isDemoMode) {
      setHoldings(DEMO_HOLDINGS);
      setLoading(false);
      return;
    }

    if (!user) {
      // No user: try demo localStorage fallback, otherwise empty
      try {
        const demo = localStorage.getItem('mevest_demo_holdings');
        if (demo) setHoldings(JSON.parse(demo));
        else setHoldings([]);
      } catch (err) {
        console.warn('[Portfolio] demo cache parse failed', err);
        setHoldings([]);
      }
      setLoading(false);
      return;
    }
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('holdings')
        .select('*')
        .eq('user_id', user.id);
        
      if (!error && data) {
        setHoldings(data.map((h: { symbol: string; name: string; type?: string; shares: number | string; cost_basis: number | string; country?: string }, i: number) => ({
          sym: h.symbol,
          name: h.name,
          type: h.type || 'stock',
          shares: Number(h.shares),
          cost: Number(h.cost_basis),
          price: Number(h.cost_basis),
          sector: 'Other',
          country: h.country || 'US',
          color: COLORS[i % COLORS.length],
        })));
      } else if (error) {
        console.warn('[Portfolio] load failed, falling back to local cache:', error.message);
        try {
          const cached = localStorage.getItem(`mevest_holdings_${user.id}`);
          if (cached) setHoldings(JSON.parse(cached));
        } catch (err) {
          console.warn('[Portfolio] cache read failed', err);
        }
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.warn('[Portfolio] network error, using cache:', msg);
      try {
        const cached = localStorage.getItem(`mevest_holdings_${user.id}`);
        if (cached) setHoldings(JSON.parse(cached));
      } catch (cacheErr) {
        console.warn('[Portfolio] cache read failed', cacheErr);
      }
    }
    setLoading(false);
  }, [user, isDemoMode]);

  useEffect(() => { loadHoldings(); }, [loadHoldings]);

  // Register holding symbols for live polling
  useEffect(() => {
    if (holdings.length > 0) {
      registerSymbols(holdings.map(h => h.sym));
    }
  }, [holdings, registerSymbols]);

  // Listen for data changes from AI chatbot
  useEffect(() => {
    const handler = () => loadHoldings();
    window.addEventListener('mevest-data-changed', handler);
    return () => window.removeEventListener('mevest-data-changed', handler);
  }, [loadHoldings]);

  const addHolding = useCallback(async (h: Omit<Holding, 'price' | 'sector' | 'country' | 'color'>) => {
    // Demo mode: just update state
    if (isDemoMode) {
      setHoldings(prev => {
        if (prev.find(x => x.sym === h.sym)) return prev;
        return [...prev, { ...h, price: h.cost, sector: 'Other', country: 'US', color: COLORS[prev.length % COLORS.length] }];
      });
      return;
    }

    if (!user) return;
    // Optimistic update
    setHoldings(prev => {
      if (prev.find(x => x.sym === h.sym)) return prev;
      const next = [...prev, { ...h, price: h.cost, sector: 'Other', country: 'US', color: COLORS[prev.length % COLORS.length] }];
      try { localStorage.setItem(`mevest_holdings_${user.id}`, JSON.stringify(next)); } catch (err) {
        console.warn('[Portfolio] cache write failed', err);
      }
      return next;
    });
    // Persist
    const { error } = await supabase.from('holdings').upsert({
      user_id: user.id, symbol: h.sym, name: h.name, type: h.type, shares: h.shares, cost_basis: h.cost, country: 'US',
    }, { onConflict: 'user_id,symbol' });
    if (error) console.warn('[Portfolio] upsert failed:', error.message);
  }, [user, isDemoMode]);

  const removeHolding = useCallback(async (sym: string) => {
    // Demo mode: just update state
    if (isDemoMode) {
      setHoldings(prev => prev.filter(h => h.sym !== sym));
      return;
    }

    if (!user) return;
    setHoldings(prev => {
      const next = prev.filter(h => h.sym !== sym);
      try { localStorage.setItem(`mevest_holdings_${user.id}`, JSON.stringify(next)); } catch (err) {
        console.warn('[Portfolio] cache write failed', err);
      }
      return next;
    });
    const { error } = await supabase.from('holdings').delete().eq('user_id', user.id).eq('symbol', sym);
    if (error) console.warn('[Portfolio] delete failed:', error.message);
  }, [user, isDemoMode]);

  return (
    <PortfolioContext.Provider value={{ holdings, addHolding, removeHolding, loading }}>
      {children}
    </PortfolioContext.Provider>
  );
}

