type Props = { tab: string; setTab: (t: any) => void; balance: number };
export default function Header({ tab, setTab, balance }: Props) {
  return (
    <header className="bg-gray-900 border-b border-gray-800 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold text-indigo-400">PredictX</span>
        <nav className="flex gap-1 ml-6">
          {(['markets','portfolio'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition ${
                tab === t ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'}`}>
              {t}
            </button>
          ))}
        </nav>
      </div>
      <div className="bg-gray-800 px-4 py-1.5 rounded-full text-sm font-semibold text-green-400">
        💰 ${balance.toFixed(2)}
      </div>
    </header>
  );
}