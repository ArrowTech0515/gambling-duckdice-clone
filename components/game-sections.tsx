import Image from "next/image";
import { useEffect, useState } from "react";

export function GameSections() {
  const popularGames = [
    {
      name: 'Dice',
      description: 'Classic dice game with multipliers',
      image: 'https://www.shutterstock.com/shutterstock/photos/2491656925/display_1500/stock-photo-coins-cryptocurrency-and-online-trading-statistics-value-and-international-commerce-for-finance-2491656925.jpg',
      color: 'from-purple-600 to-purple-900'
    },
    {
      name: 'Crash',
      description: 'Watch the multiplier grow until it crashes',
      image: 'https://www.shutterstock.com/shutterstock/photos/2491656925/display_1500/stock-photo-coins-cryptocurrency-and-online-trading-statistics-value-and-international-commerce-for-finance-2491656925.jpg',
      color: 'from-red-600 to-red-900'
    },
    {
      name: 'Plinko',
      description: 'Drop the ball and watch it bounce',
      image: 'https://www.shutterstock.com/shutterstock/photos/2491656925/display_1500/stock-photo-coins-cryptocurrency-and-online-trading-statistics-value-and-international-commerce-for-finance-2491656925.jpg',
      color: 'from-blue-600 to-blue-900'
    },
    {
      name: 'Mines',
      description: 'Avoid the mines and collect gems',
      image: 'https://www.shutterstock.com/shutterstock/photos/2491656925/display_1500/stock-photo-coins-cryptocurrency-and-online-trading-statistics-value-and-international-commerce-for-finance-2491656925.jpg',
      color: 'from-green-600 to-green-900'
    },
    {
      name: 'Wheel',
      description: 'Spin the wheel of fortune',
      image: 'https://www.shutterstock.com/shutterstock/photos/2491656925/display_1500/stock-photo-coins-cryptocurrency-and-online-trading-statistics-value-and-international-commerce-for-finance-2491656925.jpg',
      color: 'from-yellow-600 to-yellow-900'
    },
    {
      name: 'Blackjack',
      description: 'Classic casino card game',
      image: 'https://www.shutterstock.com/shutterstock/photos/2491656925/display_1500/stock-photo-coins-cryptocurrency-and-online-trading-statistics-value-and-international-commerce-for-finance-2491656925.jpg',
      color: 'from-pink-600 to-pink-900'
    }
  ]

  const generateRandomData = () =>
    Array.from({ length: 30 }, (_, i) => ({
      game: popularGames[i % popularGames.length].name,
      player: `Player${i + 1}`,
      bet: (Math.random() * 0.1).toFixed(8),
      multiplier: (Math.random() * 10 + 1).toFixed(2),
      profit: (Math.random() * 0.1).toFixed(8),
    }));

  const [data] = useState(generateRandomData());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [activeFilter, setActiveFilter] = useState("Dice");

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handleRowsPerPageChange = (rows: number) => {
    setRowsPerPage(rows);
    setCurrentPage(1);
  };

  const filteredData = data.filter((row) => row.game === activeFilter);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="space-y-8 my-6">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularGames.map((game) => (
          <div 
            key={game.name}
            className={`relative group overflow-hidden rounded-xl bg-gradient-to-br ${game.color} transform hover:scale-105 transition-all duration-300`}
          >
            <div className="relative h-48 w-full">
              <Image
                src={game.image || "/placeholder.svg"}
                alt={game.name}
                layout="fill"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{game.name}</h3>
              <p className="text-gray-200 mb-4">{game.description}</p>
              <div className="flex items-center justify-between">
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">
                  Play Now
                </button>
                <div className="text-white/80">
                  <span className="text-sm">Current Players:</span>
                  <span className="ml-2 font-bold animate-pulse">{mounted ? Math.floor(Math.random() * 1000) : '---'}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="bg-gray-800 rounded-xl p-6 shadow-xl space-y-4">
        <h2 className="text-2xl font-bold text-white">Game Sections</h2>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-between gap-4 items-center">
          <div className="relative bg-gray-700/50 rounded-lg p-1 w-full sm:w-auto">
            <div className="flex gap-1 justify-center sm:justify-start">
              {["Dice", "Mines", "Wheel"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
                  className={`
                    relative px-6 py-1 text-white rounded-md transition-all duration-300
                    ${activeFilter === filter ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 animate-pulse' : 'hover:text-gray-200'}
                    ${activeFilter !== filter && 'transition-transform duration-500 transform hover:scale-105'}
                  `}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="relative bg-gray-700/50 rounded-lg p-1 w-full sm:w-auto">
            <div className="flex gap-1">
              {[10, 20, 30].map((rows) => (
                <button
                  key={rows}
                  onClick={() => handleRowsPerPageChange(rows)}
                  className={`
                    relative px-6 py-1 text-white rounded-md transition-all duration-300
                    ${rowsPerPage === rows ? 'bg-gradient-to-r from-green-400 to-green-500 text-gray-800' : 'hover:text-gray-200'}
                  `}
                >
                  Show {rows}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="transition-all duration-500 ease-in-out opacity-100">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-400 table-fixed">
              <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                <tr>
                  {["game", "player", "bet", "multiplier", "profit"].map((col) => (
                    <th key={col} className="px-6 py-3">
                      {col.charAt(0).toUpperCase() + col.slice(1)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedData.length > 0 ? (
                  paginatedData.map((row, index) => (
                    <tr key={index} className="border-b bg-gray-800 border-gray-700">
                      <td className="px-6 py-4">{row.game}</td>
                      <td className="px-6 py-4">{row.player}</td>
                      <td className="px-6 py-4">{row.bet} BTC</td>
                      <td className="px-6 py-4">{row.multiplier}x</td>
                      <td className="px-6 py-4 text-green-400">+{row.profit} BTC</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-white">
                      No data available for the selected filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-400">
            Showing {rowsPerPage} rows per page (Filter: {activeFilter})
          </span>
          <div className="flex items-center gap-2">
            <button
              className="px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              Previous
            </button>
            <span className="text-gray-400">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}   