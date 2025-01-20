export function Jackpots() {
    return (
      <div className="bg-gray-800 rounded-lg p-6 my-6">
        <h2 className="text-2xl font-bold text-white mb-4">Current Jackpots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { game: 'Dice', amount: '5.23 BTC' },
            { game: 'Crash', amount: '10,000 DOGE' },
            { game: 'Plinko', amount: '2.5 ETH' },
            { game: 'Wheel', amount: '1000 USDT' },
          ].map((jackpot, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-4 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">{jackpot.game}</h3>
              <p className="text-2xl font-bold text-yellow-500 animate-pulse">{jackpot.amount}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  