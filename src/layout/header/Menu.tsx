import { useState } from "react";
import { PAGES } from "../../utils/constants";
import { NavLink } from "react-router-dom";
import MenuButton from "./MenuButton";

function Menu(){
  
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen &&
        <nav className="absolute top-full right-0 bg-white translate-x-2 translate-y-4 rounded-md py-2 px-4 drop-shadow-md z-10">
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

export default Menu;