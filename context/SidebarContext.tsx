"use client"

import React, { createContext, useState, useContext, useEffect } from 'react'

type SidebarContextType = {
  isCollapsed: boolean
  toggleSidebar: () => void
  showRightPanel: boolean
  setShowRightPanel: (show: boolean) => void
  isMobile: boolean
  isTablet: boolean
}

const SidebarContext = createContext<SidebarContextType>({
  isCollapsed: false,
  toggleSidebar: () => {},
  showRightPanel: false,
  setShowRightPanel: () => {},
  isMobile: false,
  isTablet: false,
})

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [showRightPanel, setShowRightPanel] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  // Toggle sidebar state
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  // Load initial sidebar state
  useEffect(() => {
    const storedState = localStorage.getItem('sidebarCollapsed')
    if (storedState) {
      setIsCollapsed(JSON.parse(storedState))
    }
  }, [])

  // Save sidebar state
  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', JSON.stringify(isCollapsed))
  }, [isCollapsed])

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const mobile = width < 768 // md breakpoint
      const tablet = width >= 768 && width < 1024 // lg breakpoint

      setIsMobile(mobile)
      setIsTablet(tablet)

      // Auto-collapse sidebar on mobile/tablet
      if ((mobile || tablet) && !isCollapsed) {
        setIsCollapsed(true)
      }

      // Auto-close right panel on resize for both mobile and tablet
      if ((mobile || tablet) && showRightPanel) {
        setShowRightPanel(false)
      }
    }

    // Initial check
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isCollapsed, showRightPanel])

  // Handle clicks outside panels
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const isRightPanelClick = target.closest('[data-settings-button="true"]')
      const isRightPanel = target.closest('[data-right-panel="true"]')
      const isSidebarClick = target.closest('[data-sidebar-toggle="true"]')
      const isSidebar = target.closest('[data-sidebar="true"]')

      // Close right panel if clicking outside (for all viewport sizes)
      if (showRightPanel && !isRightPanelClick && !isRightPanel) {
        setShowRightPanel(false)
      }

      // Collapse sidebar on mobile/tablet if clicking outside
      if ((isMobile || isTablet) && !isCollapsed && !isSidebarClick && !isSidebar) {
        setIsCollapsed(true)
      }
    }

    // Handle escape key press to close right panel
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showRightPanel) {
        setShowRightPanel(false)
      }
    }

    // Handle scroll on main content
    const handleMainScroll = () => {
      if (showRightPanel) {
        setShowRightPanel(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscKey)
    document.querySelector('main')?.addEventListener('scroll', handleMainScroll)
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscKey)
      document.querySelector('main')?.removeEventListener('scroll', handleMainScroll)
    }
  }, [isMobile, isTablet, isCollapsed, showRightPanel])

  return (
    <SidebarContext.Provider value={{
      isCollapsed,
      toggleSidebar,
      showRightPanel,
      setShowRightPanel,
      isMobile,
      isTablet,
    }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => useContext(SidebarContext)