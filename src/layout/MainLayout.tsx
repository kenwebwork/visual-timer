import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";
import ScrollToTop from "../utils/ScrollToTop";
import ResetBreakMode from "../utils/resetBreakMode";

const MainLayout: React.FC = () => {
  
  const headerRef = useRef<HTMLElement | null>(null);

  const [headerHeight, setHeaderHeight] = useState<number | null>(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.getBoundingClientRect().height);
    }
  }, []);

  const [isMenuOpen, setMenuIsOpen] = useState<boolean>(false);
  const [isBreakMode, setIsBreakMode] = useState<boolean>(false);
  
  const headerClass: string = isBreakMode
    ? "relative py-[2.4px] px-5 bg-[#FF5907] dark:bg-[#0C114C] transition duration-700"
    : "relative py-[2.4px] px-5 bg-blue-600 dark:bg-[#0C114C] transition duration-700"

  const mainClass: string = isBreakMode
    ? "pt-5 px-5 pb-5 bg-[#FFB192] dark:bg-[#1c2f47] transition duration-700"
    : "pt-5 px-5 pb-5 bg-blue-200 dark:bg-[#1c2f47] transition duration-700"

  return (
    <>
      <header ref={headerRef} className={headerClass}>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setMenuIsOpen} />
      </header>
      {isMenuOpen && <div 
        style={{ minHeight: `calc(100vh - ${headerHeight}px` }}
        onClick={() => setMenuIsOpen(false)}
        className="
          absolute t-0 l-0
          w-screen
          bg-black
          opacity-[.1]
          z-10
        "
      />}
      <ScrollToTop />
      <ResetBreakMode setIsBreakMode={setIsBreakMode} />
      <main className={mainClass} style={{ minHeight: `calc(100vh - ${headerHeight}px)` }} >
        <Outlet context={{ isBreakMode, setIsBreakMode }}/>
      </main>
      <footer className="pb-3 bg-[#eaeaea] dark:bg-[#1c2f47]">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;