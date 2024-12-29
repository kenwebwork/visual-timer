import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout(){
  return (
    <>
      <header className="flex justify-between bg-blue-600 py-2 px-5">
        <Header />
      </header>
      <main className="bg-blue-300 px-5">
        <Outlet />
      </main>
      <footer className="bg-blue-300">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;