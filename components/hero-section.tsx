import Image from 'next/image'

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-purple-800 to-purple-900 rounded-lg p-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-20 h-20 bg-yellow-500/20 rounded-full -top-10 -left-10 animate-blob" />
        <div className="absolute w-20 h-20 bg-purple-500/20 rounded-full top-32 right-32 animate-blob animation-delay-2000" />
        <div className="absolute w-20 h-20 bg-pink-500/20 rounded-full -bottom-10 -right-10 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 animate-fadeIn">
          Best Bitcoin <span className="text-yellow-500">Dice Game</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-white mb-4 animate-fadeIn animation-delay-200">Since 2016*</h2>
        <p className="text-gray-300 mb-6 max-w-xl animate-fadeIn animation-delay-400">
          Experience the thrill of crypto gambling with our advanced dice game and sports betting platform. 
          Join thousands of players and start winning big today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-600">
          <button className="bg-yellow-500 hover:bg-yellow-400 transition-colors text-white px-6 py-3 rounded-lg transform hover:scale-105">
            SIGN UP AND PLAY
          </button>
          <div className="flex space-x-2">
            <button className="p-2 bg-gray-700 hover:bg-gray-600 transition-colors rounded-lg">
              <Image src="https://www.shutterstock.com/shutterstock/photos/2491656925/display_1500/stock-photo-coins-cryptocurrency-and-online-trading-statistics-value-and-international-commerce-for-finance-2491656925.jpg" alt="Google" width={24} height={24} />
            </button>
            <button className="p-2 bg-gray-700 hover:bg-gray-600 transition-colors rounded-lg">
              <Image src="https://www.shutterstock.com/shutterstock/photos/2491656925/display_1500/stock-photo-coins-cryptocurrency-and-online-trading-statistics-value-and-international-commerce-for-finance-2491656925.jpg" alt="Apple" width={24} height={24} />
            </button>
            <button className="p-2 bg-gray-700 hover:bg-gray-600 transition-colors rounded-lg">
              <Image src="https://www.shutterstock.com/shutterstock/photos/2491656925/display_1500/stock-photo-coins-cryptocurrency-and-online-trading-statistics-value-and-international-commerce-for-finance-2491656925.jpg" alt="Telegram" width={24} height={24} />
            </button>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="text-2xl font-bold text-yellow-500">$1,000,000+</p>
            <p className="text-sm text-gray-400">Daily Betting Volume</p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="text-2xl font-bold text-green-500">99.9%</p>
            <p className="text-sm text-gray-400">Provably Fair</p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="text-2xl font-bold text-blue-500">10+</p>
            <p className="text-sm text-gray-400">Cryptocurrencies Accepted</p>
          </div>
        </div>
        <p className="text-gray-400 text-sm mt-4">
          * according to our most loyal players :)
        </p>
      </div>

      {/* Animated coins */}
      <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
        <Image
          src="https://img.freepik.com/free-vector/slot-machine-big-win-concept-realistic-style_52683-8950.jpg?t=st=1737142133~exp=1737145733~hmac=4bd140a138013a712e35b90ad39280a99edc03e29b71347a42a8ac5c488ec91b&w=740"
          alt="Floating coins"
          width={200}
          height={200}
          className="animate-float rounded-full border "
        />
      </div>
    </div>
  )
}

