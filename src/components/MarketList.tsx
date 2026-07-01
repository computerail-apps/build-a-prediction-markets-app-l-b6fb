import type { Market } from '../lib/supabase';

const CAT_COLORS: Record<string, string> = { Crypto: 'bg-orange-500', Finance: 'bg-blue-500', AI: 'bg-purple-500', Space: 'bg-cyan-500' };

type Props = { markets: Market[]; onSelect: (m: Market) => void };
export default function MarketList({ markets, onSelect }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Open Markets</h2>
      <div className="grid gap-4">
        {markets.map(m => (
          <div key={m.id} onClick={() => onSelect(m)}
            className="bg-gray-900 border border-gray-800 rounded-xl p-5 cursor-pointer hover:border-indigo-500 transition">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <span className={`text-xs px-2 py-0.5 rounded-full text-white font-medium ${CAT_COLORS[m.category] ?? 'bg-gray-600'}`}>{m.category}</span>
                <h3 className="mt-2 font-semibold text-lg">{m.title}</h3>
                <p className="text-gray-400 text-sm mt-1">Closes {m.closes_at} · Vol ${(m.volume/1000).toFixed(0)}k</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <div className="text-center bg-green-900/40 border border-green-700 rounded-lg px-4 py-2">
                  <div className="text-green-400 font-bold text-xl">{m.yes_price}¢</div>
                  <div className="text-xs text-green-500">YES</div>
                </div>
                <div className="text-center bg-red-900/40 border border-red-700 rounded-lg px-4 py-2">
                  <div className="text-red-400 font-bold text-xl">{m.no_price}¢</div>
                  <div className="text-xs text-red-500">NO</div>
                </div>
              </div>
            </div>
            <div className="mt-3 h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-500 to-indigo-500 rounded-full" style={{ width: `${m.yes_price}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}