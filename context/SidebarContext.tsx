"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

type SidebarContextType = {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  showRightPanel: boolean;
  setShowRightPanel: (show: boolean) => void;
  isModalOpen: boolean;
  toggleModal: () => void;
  isMobile: boolean;
  isTablet: boolean;
};

const SidebarContext = createContext<SidebarContextType>({
  isCollapsed: false,
  toggleSidebar: () => {},
  showRightPanel: false,
  setShowRightPanel: () => {},
  isModalOpen: false,
  toggleModal: () => {},
  isMobile: false,
  isTablet: false,
});

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showRightPanel, setShowRightPanel] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mobile = width < 768;
      const tablet = width >= 768 && width < 1024;

      setIsMobile(mobile);
      setIsTablet(tablet);

      if ((mobile || tablet) && window.innerWidth < 1024 && !isCollapsed) {
        setIsCollapsed(false);
      }

      if ((mobile || tablet) && showRightPanel) {
        setShowRightPanel(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isCollapsed, showRightPanel]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Check if click is inside modal or modal trigger
      const isModalClick = target.closest('[data-modal="true"]');
      const isModalTrigger = target.closest('[data-modal-trigger="true"]');

      if (isModalClick || isModalTrigger) {
        return;
      }

      // Handle sidebar and right panel clicks
      const isSidebarClick =
        target.closest('[data-sidebar="true"]') ||
        target.closest('[data-sidebar-toggle="true"]');
      const isRightPanelClick =
        target.closest('[data-right-panel="true"]') ||
        target.closest('[data-settings-button="true"]');

      // Only close panels if clicking outside
      if (!isSidebarClick && !isRightPanelClick && (isMobile || isTablet)) {
        setIsCollapsed(true);
        setShowRightPanel(false);
      }

      // Only close modal if explicitly clicking outside modal
      if (!isModalClick && !isModalTrigger && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (showRightPanel) {
          setShowRightPanel(false);
        }
        if (!isCollapsed && (isMobile || isTablet)) {
          setIsCollapsed(true);
        }
        if (isModalOpen) {
          setIsModalOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isMobile, isTablet, isCollapsed, showRightPanel, isModalOpen]);

  return (
    <SidebarContext.Provider
      value={{
        isCollapsed,
        toggleSidebar,
        showRightPanel,
        setShowRightPanel,
        isModalOpen,
        toggleModal,
        isMobile,
        isTablet,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);