import React from "react";

interface MenuButtonProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuButton: React.FC<MenuButtonProps> = ({isOpen, setIsOpen}) => {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={isOpen ?
        'relative py-1 px-2 rounded-md font-bold cursor-pointer translate-x-2 text-blue-600 bg-white'
        :
        'relative py-1 px-2 rounded-md font-bold cursor-pointer translate-x-2 text-white'}
    >
      Menu
    </div>
  );
};

export default MenuButton;