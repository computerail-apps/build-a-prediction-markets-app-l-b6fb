import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(url, key);

export type Market = {
  id: string;
  title: string;
  description: string;
  yes_price: number;
  no_price: number;
  volume: number;
  closes_at: string;
  category: string;
  resolved: boolean;
  outcome: boolean | null;
};

export type Position = {
  id: string;
  market_id: string;
  user_id: string;
  side: 'YES' | 'NO';
  shares: number;
  avg_price: number;
};