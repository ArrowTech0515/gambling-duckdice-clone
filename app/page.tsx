"use client"
import { HeroSection } from "@/components/hero-section"
import { CryptoTicker } from "@/components/crypto-ticker"
import { GameSections } from "@/components/game-sections"
import { StatsCards } from "@/components/stats-cards"
import { Jackpots } from "@/components/jackpots"
import { useSidebar } from '../context/SidebarContext'
import { Footer } from "@/components/footer"

export default function Home() {
  const { isCollapsed, showRightPanel } = useSidebar()

  return (
    <div className={`
      p-4 md:p-6 lg:p-8 
      ${isCollapsed ? 'lg:ml-16' : 'lg:ml-64'}
      ${showRightPanel ? 'lg:mr-64' : ''}
      transition-all duration-300
    `}>
      <div className="max-w-7xl mx-auto space-y-6">
        <HeroSection />
        <CryptoTicker />
        <Jackpots />
        {/* <GameSections /> */}
        <GameSections />
        <StatsCards />
        <Footer />
      </div>
    </div>
  )
}

