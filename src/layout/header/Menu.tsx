import React from "react";
import MenuButton from "./MenuButton";
import MenuCard from "./MenuCard";
import { HeaderProps } from "../../features/timer/interfaces/HeaderProps";

const Menu: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen}) => {
  return (
    <>
      <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <MenuCard setIsMenuOpen={setIsMenuOpen} />}
    </>
  );
};

export default Menu;