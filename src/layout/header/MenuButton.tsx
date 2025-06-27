import React, { useState } from "react";
import { HeaderProps } from "../../features/timer/interfaces/HeaderProps";

const MenuButton: React.FC<HeaderProps> = ({isMenuOpen, setIsMenuOpen}) => {

  const [isHover, setIsHover] = useState<boolean>(false);

  const outerBaseStyle: string = "relative py-1 px-2 rounded-md font-bold translate-x-2 text-sm cursor-pointer";
  const outerStyle: string = (isHover || isMenuOpen)
    ? outerBaseStyle + " text-blue-600 bg-white"
    : outerBaseStyle + " text-white";

  return (
    <div
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={outerStyle}
    >
      <div className="border-white border-t-2 border-b-2">Menu</div>
    </div>
  );
};

export default MenuButton;