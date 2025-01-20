"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Trophy, Clock, DollarSign } from "lucide-react"

const leaderboardData = [
  { rank: 1, username: "Player1", score: 120.5, prize: 500, avatar: "https://www.shutterstock.com/shutterstock/photos/2254503505/display_1500/stock-photo-golden-coin-with-dollar-symbol-realistic-in-d-render-isolated-on-white-background-d-illustration-2254503505.jpg" },
  { rank: 2, username: "Player2", score: 98.7, prize: 300, avatar: "https://www.shutterstock.com/shutterstock/photos/2254503505/display_1500/stock-photo-golden-coin-with-dollar-symbol-realistic-in-d-render-isolated-on-white-background-d-illustration-2254503505.jpg" },
  { rank: 3, username: "Player3", score: 75.4, prize: 200, avatar: "https://www.shutterstock.com/shutterstock/photos/2254503505/display_1500/stock-photo-golden-coin-with-dollar-symbol-realistic-in-d-render-isolated-on-white-background-d-illustration-2254503505.jpg" },
]

export default function DecoyPot() {
  const [timeLeft, setTimeLeft] = useState("08h:50m:15s")

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulating countdown logic (replace with real logic if necessary)
      const currentTime = new Date()
      setTimeLeft(
        `${currentTime.getHours()}h:${currentTime.getMinutes()}m:${currentTime.getSeconds()}s`
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-gray-800 p-4 rounded-lg shadow-lg">
      {/* Event Banner */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <Trophy className="w-6 h-6 text-yellow-500" />
          Decoy Jackpot
        </h3>
        <div className="text-sm text-gray-400">
          Win big! Participate now and claim your spot on the leaderboard.
        </div>
      </div>

      {/* Prize Pool */}
      <div className="bg-gray-700 p-4 rounded-lg mb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-500" />
            <span className="text-white font-semibold">PRIZE POOL</span>
          </div>
          <span className="text-sm text-gray-400">Players: {leaderboardData.length}</span>
        </div>
        <div className="mt-2 text-3xl font-bold text-yellow-500">$1,000</div>
      </div>

      {/* Leaderboard */}
      <div className="space-y-4">
        <h4 className="text-gray-400 mb-2">LEADERBOARD</h4>
        {leaderboardData.map((player, index) => (
          <div
            key={player.username}
            className="flex items-center justify-between bg-gray-700 p-3 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  index === 0
                    ? "bg-yellow-500"
                    : index === 1
                    ? "bg-gray-400"
                    : index === 2
                    ? "bg-orange-500"
                    : "bg-gray-600"
                }`}
              >
                {player.rank}
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image src={player.avatar} alt={player.username} width={40} height={40} />
              </div>
              <div>
                <div className="text-white font-semibold">{player.username}</div>
                <div className="text-sm text-gray-400">Score: {player.score}</div>
              </div>
            </div>
            <div className="text-white font-semibold">${player.prize}</div>
          </div>
        ))}
      </div>

      {/* Countdown */}
      <div className="mt-4 flex items-center gap-2 text-gray-400">
        <Clock className="w-5 h-5 text-orange-500" />
        <span>Time left: </span>
        <span className="text-white">{timeLeft}</span>
      </div>
    </div>
  )
}
