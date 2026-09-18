import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/context/AuthContext";
import { useAuth } from "@/context/useAuth";
import { PortfolioProvider } from "@/context/PortfolioContext";
import { WatchlistProvider } from "@/context/WatchlistContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { RealtimeMarketProvider } from "@/context/RealtimeMarketContext";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { DemoProvider } from "@/context/DemoContext";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import React, { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const AnalyticsPage = lazy(() => import("./pages/AnalyticsPage"));
const MarketsPage = lazy(() => import("./pages/MarketsPage"));
const ScreenerPage = lazy(() => import("./pages/ScreenerPage"));
const CalendarPage = lazy(() => import("./pages/CalendarPage"));
const WatchlistPage = lazy(() => import("./pages/WatchlistPage"));
const NewsFeedPage = lazy(() => import("./pages/NewsFeedPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));
const CommunityPage = lazy(() => import("./pages/CommunityPage"));
const LearnPage = lazy(() => import("./pages/LearnPage"));

function LazyFallback() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

const queryClient = new QueryClient();

function AppRoutes() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <Routes>
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="*" element={<AuthPage />} />
      </Routes>
    );
  }

  return (
    <PortfolioProvider>
      <WatchlistProvider>
        <Suspense fallback={<LazyFallback />}>
          <Routes>
            <Route path="/" element={<Index />}>
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<DashboardPage onAddHolding={() => window.dispatchEvent(new CustomEvent('mevest-open-add-holding'))} />} />
              <Route path="portfolio" element={<PortfolioPage onAddHolding={() => window.dispatchEvent(new CustomEvent('mevest-open-add-holding'))} />} />
              <Route path="analytics" element={<AnalyticsPage />} />
              <Route path="markets" element={<MarketsPage />} />
              <Route path="screener" element={<ScreenerPage onNavigate={(p, s) => window.dispatchEvent(new CustomEvent('mevest-navigate', { detail: { page: p, sym: s } }))} />} />
              <Route path="calendar" element={<CalendarPage />} />
              <Route path="watchlist" element={<WatchlistPage onNavigate={(p, s) => window.dispatchEvent(new CustomEvent('mevest-navigate', { detail: { page: p, sym: s } }))} />} />
              <Route path="news" element={<NewsFeedPage />} />
              <Route path="community" element={<CommunityPage />} />
              <Route path="learn" element={<LearnPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </WatchlistProvider>
    </PortfolioProvider>
  );
}

// Demo Mode Badge Component
function DemoBadge() {
  const [isVisible, setIsVisible] = React.useState(true);
  
  if (!isVisible) return null;
  
  return (
    <>
      <div className="fixed bottom-20 right-4 z-[9998] bg-gradient-to-r from-amber-500 to-orange-600 text-white px-5 py-3 rounded-lg shadow-2xl text-sm font-bold flex items-center gap-2 animate-pulse border-2 border-white/30">
        <span className="text-xl">🎭</span>
        <span>Demo Mode</span>
        <button 
          onClick={() => setIsVisible(false)}
          className="ml-3 hover:bg-white/30 rounded-full w-6 h-6 flex items-center justify-center transition-colors text-lg font-bold"
          aria-label="Close demo badge"
        >
          ×
        </button>
      </div>
      
      {/* Disclaimer Footer - More Visible */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-950 text-white text-center py-3 px-6 text-xs z-[9999] border-t-2 border-amber-500 shadow-2xl">
        <p className="font-semibold">
          ⚠️ This is a DEMO version with sample data. For full functionality, connect to Supabase backend.
          <span className="ml-2 font-medium">This is a class project for educational purposes only — not financial advice.</span>
        </p>
      </div>
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <DemoProvider>
          <AuthProvider>
            <RealtimeMarketProvider>
              <CurrencyProvider>
                <LanguageProvider>
                  <Toaster />
                  <Sonner />
                  <BrowserRouter>
                    <>
                      <AppRoutes />
                      <DemoBadge />
                      <LegalDisclaimer />
                    </>
                  </BrowserRouter>
                </LanguageProvider>
              </CurrencyProvider>
            </RealtimeMarketProvider>
          </AuthProvider>
        </DemoProvider>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
