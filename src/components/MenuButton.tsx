import { useState } from "react";
import { PAGES } from "../utils/constants";
import { NavLink } from "react-router-dom";

function MenuButton(){
  
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = ():void => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div
        onClick={handleClick}
        className={isOpen ?
          'relative py-1 px-2 rounded-md font-bold cursor-pointer translate-x-2 text-blue-600 bg-white'
          :
          'relative py-1 px-2 rounded-md font-bold cursor-pointer translate-x-2 text-white'}
      >
        Menu
      </div>
      {isOpen &&
        <nav className="absolute top-full right-0 bg-white -translate-x-3 translate-y-2 rounded-md py-2 px-4 drop-shadow-md z-10">
          <ul className="min-w-24">
          {PAGES.map((page) => (
            <li key={page.url} className="mb-2">
              <NavLink
                to={page.url}
                onClick={() => setIsOpen(false)}
                className={({ isActive }: any) => (isActive ? 'text-blue-500 font-bold' : '')}
              >
                - {page.title}
              </NavLink>
            </li>
          ))}
          </ul>
        </nav>
      }
    </>
  );
};

export default MenuButton;