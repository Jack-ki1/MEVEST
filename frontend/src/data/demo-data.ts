// Demo mode mock data - realistic sample data for GitHub Pages demo
import { Holding } from '@/context/PortfolioContext';

export const DEMO_HOLDINGS: Holding[] = [
  {
    sym: 'SCOM.NR',
    name: 'Safaricom PLC',
    type: 'stock',
    shares: 500,
    cost: 28.50,
    price: 29.25,
    sector: 'Telecommunications',
    country: 'KE',
    color: '#5b9cf6',
  },
  {
    sym: 'EQTY.NR',
    name: 'Equity Group Holdings',
    type: 'stock',
    shares: 300,
    cost: 52.25,
    price: 54.10,
    sector: 'Banking',
    country: 'KE',
    color: '#63d2aa',
  },
  {
    sym: 'AAPL',
    name: 'Apple Inc.',
    type: 'stock',
    shares: 10,
    cost: 190.00,
    price: 213.42,
    sector: 'Technology',
    country: 'US',
    color: '#a78bfa',
  },
  {
    sym: 'BTC-USD',
    name: 'Bitcoin USD',
    type: 'crypto',
    shares: 0.05,
    cost: 65000,
    price: 67420,
    sector: 'Crypto',
    country: 'GLOBAL',
    color: '#f5a623',
  },
  {
    sym: 'KCB.NR',
    name: 'KCB Group PLC',
    type: 'stock',
    shares: 200,
    cost: 40.00,
    price: 42.10,
    sector: 'Banking',
    country: 'KE',
    color: '#f0616b',
  },
];

export const DEMO_WATCHLIST = [
  { sym: 'NVDA', name: 'NVIDIA Corp.', addedAt: new Date().toISOString() },
  { sym: 'EABL.NR', name: 'East African Breweries', addedAt: new Date().toISOString() },
  { sym: 'ETH-USD', name: 'Ethereum USD', addedAt: new Date().toISOString() },
  { sym: 'COOP.NR', name: 'Co-operative Bank', addedAt: new Date().toISOString() },
];

export const DEMO_GOALS = [
  {
    id: '1',
    title: 'Emergency Fund',
    target_amount: 500000,
    current_amount: 325000,
    currency: 'KES',
    deadline: '2026-12-31',
  },
  {
    id: '2',
    title: 'Car Purchase',
    target_amount: 2000000,
    current_amount: 850000,
    currency: 'KES',
    deadline: '2027-06-30',
  },
];

export const DEMO_FEES = [
  { fee_type: 'brokerage', amount: 2500, currency: 'KES', incurred_at: '2026-09-01' },
  { fee_type: 'management', amount: 5000, currency: 'KES', incurred_at: '2026-09-01' },
  { fee_type: 'fx', amount: 1200, currency: 'KES', incurred_at: '2026-08-15' },
];

export const DEMO_ALERTS = [
  { symbol: 'SCOM.NR', condition: 'above', threshold: 30, active: true },
  { symbol: 'BTC-USD', condition: 'below', threshold: 65000, active: true },
];

export const DEMO_IDEAS = [
  {
    id: '1',
    user_id: 'demo-user',
    symbol: 'SCOM.NR',
    title: 'Safaricom undervalued after dip',
    body: 'With M-Pesa growth at 12% YoY and current PE of 18x, SCOM looks attractive below 30 KES. Target: 35 KES by Q4 2026.',
    sentiment: 'bullish',
    created_at: new Date(Date.now() - 86400000).toISOString(),
    likes: 24,
  },
  {
    id: '2',
    user_id: 'demo-user-2',
    symbol: 'BTC-USD',
    title: 'Bitcoin consolidation before breakout',
    body: 'BTC holding support at $65K. Institutional accumulation continues. Watch for break above $70K resistance.',
    sentiment: 'bullish',
    created_at: new Date(Date.now() - 172800000).toISOString(),
    likes: 18,
  },
];

export const DEMO_LEARNING_PROGRESS = [
  { module_id: 'book-closure', completed: true, score: 100, completed_at: new Date().toISOString() },
  { module_id: 'pe-ratio', completed: true, score: 85, completed_at: new Date().toISOString() },
  { module_id: 'diversification', completed: false, score: 0, completed_at: null },
];

export const DEMO_BRIEFINGS = [
  {
    id: '1',
    prompt: 'Daily pre-market briefing on my portfolio and NSE banking stocks',
    schedule_cron: '0 6 * * 1-5',
    delivery: 'in_app',
    active: true,
  },
];

export const DEMO_PRESETS = [
  {
    name: 'NSE Value Banks',
    filters: { exchange: 'NSE', sector: 'Banking', pe_max: 12, dividend_min: 3 },
  },
  {
    name: 'Dividend Aristocrats',
    filters: { dividend_min: 5, market_cap_min: 1000000000 },
  },
];

// Generate realistic price history for charts
export function generatePriceHistory(basePrice: number, days: number = 90): number[] {
  const prices: number[] = [basePrice];
  let currentPrice = basePrice;
  
  for (let i = 1; i < days; i++) {
    const change = (Math.random() - 0.48) * 0.03; // Slight upward bias
    currentPrice = currentPrice * (1 + change);
    prices.push(currentPrice);
  }
  
  return prices;
}

export const DEMO_NEWS = [
  {
    title: 'Safaricom Reports 12% M-Pesa Revenue Growth in H1 2026',
    publisher: 'Business Daily Africa',
    link: 'https://example.com/news/1',
    publishedAt: new Date(Date.now() - 3600000).toISOString(),
    thumbnail: '',
    relatedTickers: ['SCOM.NR'],
    sentiment: 'positive',
    sentiment_score: 0.82,
  },
  {
    title: 'NSE Banking Sector Shows Resilience Amid Regional Challenges',
    publisher: 'The Star Kenya',
    link: 'https://example.com/news/2',
    publishedAt: new Date(Date.now() - 7200000).toISOString(),
    thumbnail: '',
    relatedTickers: ['EQTY.NR', 'KCB.NR', 'COOP.NR'],
    sentiment: 'positive',
    sentiment_score: 0.65,
  },
  {
    title: 'Bitcoin Consolidates Above $65K as Institutional Demand Grows',
    publisher: 'CoinDesk',
    link: 'https://example.com/news/3',
    publishedAt: new Date(Date.now() - 10800000).toISOString(),
    thumbnail: '',
    relatedTickers: ['BTC-USD'],
    sentiment: 'neutral',
    sentiment_score: 0.15,
  },
];

export const DEMO_KEY_MOMENTS = [
  {
    symbol: 'SCOM.NR',
    change_pct: 2.7,
    summary: 'Safaricom rises on strong M-Pesa transaction volumes and positive analyst upgrades following H1 results.',
    sources: [{ title: 'H1 2026 Earnings Report', url: 'https://example.com/earnings', timestamp: new Date().toISOString() }],
    sentiment: 'positive',
    created_at: new Date().toISOString(),
  },
  {
    symbol: 'BTC-USD',
    change_pct: 2.15,
    summary: 'Bitcoin gains momentum as ETF inflows continue and macro uncertainty drives safe-haven demand.',
    sources: [{ title: 'CoinDesk Market Analysis', url: 'https://example.com/analysis', timestamp: new Date().toISOString() }],
    sentiment: 'positive',
    created_at: new Date().toISOString(),
  },
];
