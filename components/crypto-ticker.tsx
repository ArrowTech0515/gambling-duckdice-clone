import { useEffect, useState } from "react";

export function CryptoTicker  () {
  const [tickerPosition, setTickerPosition] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerPosition((prevPosition) => (prevPosition - 1) % -100);
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const cryptos = [
    { name: "Bitcoin", symbol: "BTC", price: "$45,123.45", change: "+2.5%" },
    { name: "Ethereum", symbol: "ETH", price: "$3,456.78", change: "-1.2%" },
    { name: "Dogecoin", symbol: "DOGE", price: "$0.3456", change: "+15.7%" },
    { name: "Litecoin", symbol: "LTC", price: "$178.90", change: "+0.8%" },
    { name: "Ripple", symbol: "XRP", price: "$1.23", change: "-3.4%" },
  ];

  return (
    <div className="w-full bg-gray-900 p-4 rounded-lg">
      <div className="flex items-center overflow-hidden">
        <div className="flex items-center space-x-8 min-w-fit pr-8">
          <div className="text-center">
            <p className="text-lg font-bold text-white">Crypto Networks</p>
            <p className="text-2xl font-bold text-blue-500">14</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-white">Crypto Currencies</p>
            <p className="text-2xl font-bold text-green-500">38</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-white">Fiat Currencies</p>
            <p className="text-2xl font-bold text-purple-500">19</p>
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <div
            className="flex whitespace-nowrap transition-transform duration-1000 ease-linear"
            style={{ transform: `translateX(${tickerPosition}%)` }}
          >
            {cryptos.concat(cryptos).map((crypto, index) => (
              <div
                key={index}
                className="inline-flex items-center mx-4 bg-gray-800 px-4 py-2 rounded-lg"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                <span className="text-white font-semibold">{crypto.name}</span>
                <span className="text-gray-400 mx-2">{crypto.price}</span>
                <span
                  className={
                    crypto.change.startsWith("+")
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {crypto.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

