import React from "react";
import SiteLogo from "../../utils/SiteLogo";
import Menu from "./Menu";
import { HeaderProps } from "../../features/timer/interfaces/HeaderProps";
import { useLocation } from "react-router-dom";

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {

  const location = useLocation();
  const isHome = location.pathname === "/";
  const className = isHome
    ? "relative flex justify-between align-center max-w-96 m-auto"
    : "relative flex justify-between align-center max-w-[600px] m-auto"

  return (
    <div className={className}>
      <SiteLogo />
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default Header;