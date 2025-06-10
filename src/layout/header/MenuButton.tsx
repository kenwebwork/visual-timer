import React from "react";
import { HeaderProps } from "../../features/timer/interfaces/HeaderProps";

const MenuButton: React.FC<HeaderProps> = ({isMenuOpen, setIsMenuOpen}) => {
  return (
    <div
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className={isMenuOpen
        ? 'relative py-1 px-2 rounded-md font-bold cursor-pointer translate-x-2 text-blue-600 bg-white'
        : 'relative py-1 px-2 rounded-md font-bold cursor-pointer translate-x-2 text-white'
      }
    >Menu</div>
  );
};

export default MenuButton;