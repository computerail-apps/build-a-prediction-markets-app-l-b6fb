import type { Market } from './supabase';

export const MOCK_MARKETS: Market[] = [
  { id: '1', title: 'Will Bitcoin exceed $100k by end of 2025?', description: 'Resolves YES if BTC/USD closes above $100,000 on Dec 31 2025.', yes_price: 62, no_price: 38, volume: 245000, closes_at: '2025-12-31', category: 'Crypto', resolved: false, outcome: null },
  { id: '2', title: 'Will the Fed cut rates in Q3 2025?', description: 'Resolves YES if the Federal Reserve announces a rate cut in Q3 2025.', yes_price: 45, no_price: 55, volume: 189000, closes_at: '2025-09-30', category: 'Finance', resolved: false, outcome: null },
  { id: '3', title: 'Will GPT-5 be released before July 2025?', description: 'Resolves YES if OpenAI officially releases GPT-5 before July 1 2025.', yes_price: 78, no_price: 22, volume: 312000, closes_at: '2025-06-30', category: 'AI', resolved: false, outcome: null },
  { id: '4', title: 'Will SpaceX land on Mars by 2030?', description: 'Resolves YES if SpaceX successfully lands a crewed mission on Mars before Jan 1 2030.', yes_price: 31, no_price: 69, volume: 98000, closes_at: '2029-12-31', category: 'Space', resolved: false, outcome: null },
  { id: '5', title: 'Will the S&P 500 hit 6000 in 2025?', description: 'Resolves YES if S&P 500 closes at or above 6000 at any point in 2025.', yes_price: 55, no_price: 45, volume: 421000, closes_at: '2025-12-31', category: 'Finance', resolved: false, outcome: null },
];