import { useState } from 'react';
import type { Market } from '../lib/supabase';

type Props = { market: Market; onBack: () => void; onTrade: (m: Market, side: 'YES' | 'NO', shares: number) => void };
export default function MarketDetail({ market, onBack, onTrade }: Props) {
  const [side, setSide] = useState<'YES' | 'NO'>('YES');
  const [shares, setShares] = useState(10);
  const price = side === 'YES' ? market.yes_price : market.no_price;
  const cost = ((price / 100) * shares).toFixed(2);
  const payout = shares.toFixed(2);

  return (
    <div>
      <button onClick={onBack} className="text-indigo-400 hover:text-indigo-300 mb-4 flex items-center gap-1">← Back to Markets</button>
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-1">{market.title}</h2>
        <p className="text-gray-400 mb-4">{market.description}</p>
        <div className="flex gap-4 mb-6">
          <div className="flex-1 bg-green-900/30 border border-green-700 rounded-xl p-4 text-center">
            <div className="text-4xl font-black text-green-400">{market.yes_price}%</div>
            <div className="text-green-500 font-medium">YES probability</div>
          </div>
          <div className="flex-1 bg-red-900/30 border border-red-700 rounded-xl p-4 text-center">
            <div className="text-4xl font-black text-red-400">{market.no_price}%</div>
            <div className="text-red-500 font-medium">NO probability</div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-xl p-5">
          <h3 className="font-semibold mb-3">Place Order</h3>
          <div className="flex gap-2 mb-4">
            {(['YES','NO'] as const).map(s => (
              <button key={s} onClick={() => setSide(s)}
                className={`flex-1 py-2 rounded-lg font-bold transition ${
                  side === s ? (s === 'YES' ? 'bg-green-600' : 'bg-red-600') : 'bg-gray-700 text-gray-400'}`}>{s}</button>
            ))}
          </div>
          <label className="text-sm text-gray-400">Shares</label>
          <input type="number" min={1} value={shares} onChange={e => setShares(Number(e.target.value))}
            className="w-full mt-1 mb-4 bg-gray-700 rounded-lg px-3 py-2 text-white outline-none" />
          <div className="flex justify-between text-sm text-gray-400 mb-4">
            <span>Cost: <span className="text-white font-semibold">${cost}</span></span>
            <span>Max payout: <span className="text-white font-semibold">${payout}</span></span>
          </div>
          <button onClick={() => onTrade(market, side, shares)}
            className={`w-full py-3 rounded-xl font-bold text-lg transition ${
              side === 'YES' ? 'bg-green-600 hover:bg-green-500' : 'bg-red-600 hover:bg-red-500'}`}>
            Buy {side} @ {price}¢
          </button>
        </div>
      </div>
    </div>
  );
}