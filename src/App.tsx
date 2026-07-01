import { useState } from 'react';
import Header from './components/Header';
import MarketList from './components/MarketList';
import MarketDetail from './components/MarketDetail';
import Portfolio from './components/Portfolio';
import { MOCK_MARKETS } from './lib/mockData';
import type { Market } from './lib/supabase';

export type Position = { marketId: string; side: 'YES' | 'NO'; shares: number; avgPrice: number; title: string };

export default function App() {
  const [tab, setTab] = useState<'markets' | 'portfolio'>('markets');
  const [selected, setSelected] = useState<Market | null>(null);
  const [balance, setBalance] = useState(1000);
  const [positions, setPositions] = useState<Position[]>([]);

  const handleTrade = (market: Market, side: 'YES' | 'NO', shares: number) => {
    const price = side === 'YES' ? market.yes_price : market.no_price;
    const cost = (price / 100) * shares;
    if (cost > balance) return alert('Insufficient balance');
    setBalance(b => parseFloat((b - cost).toFixed(2)));
    setPositions(prev => {
      const existing = prev.find(p => p.marketId === market.id && p.side === side);
      if (existing) {
        return prev.map(p => p.marketId === market.id && p.side === side
          ? { ...p, shares: p.shares + shares, avgPrice: ((p.avgPrice * p.shares) + cost) / (p.shares + shares) }
          : p);
      }
      return [...prev, { marketId: market.id, side, shares, avgPrice: price, title: market.title }];
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header tab={tab} setTab={setTab} balance={balance} />
      <main className="max-w-6xl mx-auto px-4 py-6">
        {tab === 'markets' && !selected && <MarketList markets={MOCK_MARKETS} onSelect={setSelected} />}
        {tab === 'markets' && selected && <MarketDetail market={selected} onBack={() => setSelected(null)} onTrade={handleTrade} />}
        {tab === 'portfolio' && <Portfolio positions={positions} balance={balance} />}
      </main>
    </div>
  );
}