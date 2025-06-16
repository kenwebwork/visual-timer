import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";

const MainLayout: React.FC = () => {
  
  const headerRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  const [headerHeight, setHeaderHeight] = useState<number | null>(null);
  const [footerHeight, setFooterHeight] = useState<number | null>(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.getBoundingClientRect().height);
    }
  }, []);
  useEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.getBoundingClientRect().height);
    }
  }, []);

  const [isMenuOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <>
      <header ref={headerRef} className="relative py-2 px-5 bg-blue-600 dark:bg-[#0C114C]">
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
      <main className="pt-3 px-5 bg-blue-200 dark:bg-[#1c2f47]" style={{ minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px)` }} >
        <Outlet />
      </main>
      <footer ref={footerRef} className="bg-blue-200 dark:bg-[#1c2f47]">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;