import React from "react";
import SiteLogo from "../../utils/SiteLogo";
import Menu from "./Menu";
import { HeaderProps } from "../../features/timer/interfaces/HeaderProps";

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="relative flex justify-between align-center max-w-96 m-auto">
      <SiteLogo />
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default Header;