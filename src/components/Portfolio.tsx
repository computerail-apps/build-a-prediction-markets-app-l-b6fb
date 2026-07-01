import type { Position } from '../App';

type Props = { positions: Position[]; balance: number };
export default function Portfolio({ positions, balance }: Props) {
  const totalValue = positions.reduce((s, p) => s + p.shares * (p.avgPrice / 100), 0);
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Portfolio</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[['Cash Balance', `$${balance.toFixed(2)}`, 'text-green-400'],
          ['Positions Value', `$${totalValue.toFixed(2)}`, 'text-indigo-400'],
          ['Total Positions', positions.length, 'text-yellow-400']].map(([label, val, cls]) => (
          <div key={label as string} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className={`text-2xl font-bold ${cls}`}>{val}</div>
            <div className="text-gray-400 text-sm mt-1">{label}</div>
          </div>
        ))}
      </div>
      {positions.length === 0 ? (
        <div className="text-center text-gray-500 py-16">No positions yet. Go trade some markets!</div>
      ) : (
        <div className="grid gap-3">
          {positions.map((p, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex justify-between items-center">
              <div>
                <div className="font-medium">{p.title}</div>
                <div className="text-sm text-gray-400 mt-0.5">{p.shares} shares · avg {p.avgPrice.toFixed(0)}¢</div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                p.side === 'YES' ? 'bg-green-900 text-green-400' : 'bg-red-900 text-red-400'}`}>{p.side}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}