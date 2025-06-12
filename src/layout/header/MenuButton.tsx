import React, { useState } from "react";
import { HeaderProps } from "../../features/timer/interfaces/HeaderProps";

const MenuButton: React.FC<HeaderProps> = ({isMenuOpen, setIsMenuOpen}) => {

  const [isHover, setIsHover] = useState<boolean>(false);

  const styleBase: string = "relative py-1 px-2 rounded-md font-bold translate-x-2 text-md border-2 cursor-pointer"
  const style: string = isHover
    ? isMenuOpen
        ? styleBase + ' text-blue-600 bg-white border-transparent'
        : styleBase + ' text-white'
    : styleBase + ' text-white border-transparent'

  return (
    <div
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={style}
    >Menu</div>
  );
};

export default MenuButton;