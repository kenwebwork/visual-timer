import { useState } from "react";
import { PAGES } from "../utils/constants";
import { Link } from "react-router-dom";

function MenuButton(){
  
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = ():void => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div
        onClick={handleClick}
        className={
          `relative py-1 px-2 rounded-md font-bold text-white cursor-pointer
          ${isOpen && 'bg-white text-blue-600'}
          `}>
        Menu
      </div>
      {isOpen &&
        <nav className="absolute top-full right-0 bg-white -translate-x-5 translate-y-2 rounded-md py-2 px-3 drop-shadow-md">
          <ul className="min-w-24">
          {PAGES.map((page) => (
            <li className="mb-1">
              <Link
                key={page.url}
                to={page.url}
                onClick={() => setIsOpen(false)}
              >
                - {page.title}
              </Link>
            </li>
          ))}
          </ul>
        </nav>
      }
    </>
  );
};

export default MenuButton;