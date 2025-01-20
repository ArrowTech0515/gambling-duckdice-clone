"use client"

import { useState, useEffect, useRef } from 'react'
import { Trophy, Clock, Info } from 'lucide-react'
import Image from 'next/image'
import { useSidebar } from '../context/SidebarContext'

const generateLeaderboardData = () => {
  const users = []
  for (let i = 1; i <= 50; i++) {
    const score = (100 - i * 1.2 + Math.random() * 5).toFixed(2)
    users.push({
      rank: i,
      username: `Player${i}${i <= 3 ? '🏆' : ''}`,
      score: parseFloat(score),
      prize: Math.floor(1000 / i),
      points: Math.floor(10000 / i),
      level: Math.max(1, Math.floor(6 - i / 10)),
      avatar: "https://www.shutterstock.com/shutterstock/photos/2471601163/display_1500/stock-photo-create-an-avatar-for-an-ai-solution-for-sales-must-be-a-young-woman-with-purple-hair-wearing-2471601163.jpg"
    })
  }
  return users
}

const leaderboardData = generateLeaderboardData()

export function RightPanel() {
  const { showRightPanel, setShowRightPanel } = useSidebar()
  const [currentTime, setCurrentTime] = useState("08h:50m:15s")
  const [showFullContent, setShowFullContent] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}h:${minutes}m:${seconds}s`);
    }, 1000);
  
    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest('[data-settings-button="true"]')
      ) {
        setShowRightPanel(false);
      }
    };
  
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
  
    const handleMainScroll = () => {
      setShowRightPanel(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('resize', handleResize)
    const mainElement = document.querySelector('main')
    mainElement?.addEventListener('scroll', handleMainScroll)

    handleResize()

    return () => {
      clearInterval(timer);
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
      mainElement?.removeEventListener('scroll', handleMainScroll);
    };
  }, [showRightPanel]);
  
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = (e.target as HTMLDivElement).scrollTop;
    setShowFullContent(scrollTop < 10);
  };

  const topContent = (
    <div className={`transition-all duration-500 ease-in-out ${showFullContent ? 'opacity-100 max-h-[600px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
      <div className="p-4 bg-gray-800 border-b border-gray-700 ">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-white">Sniper Race</h3>
          <button className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors">
            JOIN FOR FREE
          </button>
        </div>

        <div className="bg-gray-700/50 rounded-xl p-4">
          <div className="relative overflow-hidden rounded-lg aspect-video mb-3">
            <Image
              src="https://www.shutterstock.com/shutterstock/photos/2491656925/display_1500/stock-photo-coins-cryptocurrency-and-online-trading-statistics-value-and-international-commerce-for-finance-2491656925.jpg"
              alt="Catch Target Rolls"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center mb-2">
            <span className="text-sm text-gray-400">Catch Target Rolls</span>
            <div className="text-2xl font-bold text-white">0-100</div>
          </div>
          <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
            <div className="h-full bg-orange-500 w-3/4 rounded-full" />
          </div>
          <div className="mt-2 flex items-center justify-center text-sm">
            <Clock className="w-4 h-4 text-orange-500 mr-1" />
            <span className="text-gray-400">Ends in </span>
            <span className="text-white ml-1">{currentTime}</span>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-gray-700">
        <div className="bg-gray-700/50 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span className="text-white font-semibold">PRIZE POOL</span>
              <Info className="w-4 h-4 text-gray-400" />
            </div>
            <span className="text-sm text-gray-400">SNIPERS: 69</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-green-500">500</div>
            <div className="text-2xl font-bold text-yellow-500">50,000</div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {showRightPanel && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40 "
          onClick={() => setShowRightPanel(false)}
        />
      )}
      
      <div 
        ref={panelRef}
        data-right-panel="true"
        className={`
          fixed top-16 right-0 bg-gray-800 border-l border-gray-700 h-[calc(100vh-4rem)] 
          flex flex-col transform transition-transform duration-300 ease-in-out z-50 
          md:w-64 w-3/4 
          ${showRightPanel ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-scroll scrollbar-none"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
          onScroll={handleScroll}
        >
          {topContent}
          
          <div 
            ref={headerRef}
            className="sticky top-0 bg-gray-800/95 backdrop-blur-sm border-b border-gray-700 z-10"
          >
            <h5 className="text-gray-400 text-center py-3 font-semibold">
              LEADERS
            </h5>
          </div>

          <div className="p-4">
            <div className="space-y-2">
              
              {Array(3).fill(leaderboardData).flat().map((player, index) => (
                <div 
                  key={`${player.username}-${index}`}
                  className="bg-gray-700/50 rounded-lg p-2 flex items-center gap-2 h-16 mb-3 hover:bg-gray-700 transition-all duration-300 ease-in-out"
                >
                  <div className={`
                    w-6 h-6 flex items-center justify-center rounded text-sm font-semibold
                    ${player.rank === 1 ? 'bg-yellow-500' : 
                      player.rank === 2 ? 'bg-gray-400' :
                      player.rank === 3 ? 'bg-orange-700' : 'bg-gray-600'}
                  `}>
                    {player.rank}
                  </div>
                  <div className="w-8 h-8 relative rounded-full overflow-hidden">
                    <Image
                      src={player.avatar}
                      alt={player.username}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="text-white font-medium truncate">{player.username}</span>
                      <div className="flex">
                        {Array.from({ length: player.level }).map((_, i) => (
                          <span key={i} className="text-yellow-500 text-xs">★</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-green-500">{player.score}</span>
                      <Info className="w-3 h-3 text-gray-500" />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">${player.prize}</div>
                    <div className="text-sm text-yellow-500">{player.points}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}