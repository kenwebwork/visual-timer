import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";

function MainLayout(){
  
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

  return (
    <>
      <header ref={headerRef} className="flex justify-between bg-blue-600 py-2 px-5">
        <Header />
      </header>
      <main className="bg-blue-200 pt-3 px-5" style={{ minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px)` }} >
        <Outlet />
      </main>
      <footer ref={footerRef} className="bg-blue-200">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;