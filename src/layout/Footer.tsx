import React from "react";
import { APP_NAME, PAGES } from "../utils/constants";
import { NavLink, useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  
  const location = useLocation();
  const isHome = location.pathname === "/";
  const className = isHome
    ? "max-w-96 m-auto pt-4 pb-4 text-md text-center text-gray-600"
    : "max-w-[600px] m-auto pt-4 pb-4 text-md text-center text-gray-600"

  return (
    <div className={className}>
      <ul className="mb-3 flex flex-wrap justify-center">
        {PAGES.map((page, i) => (
          <li>
            <NavLink
              to={page.url}
              className={({isActive}) => isActive 
                ? "mx-1 underline"
                : "mx-1"
              }
            >{page.title}</NavLink>
            {(PAGES.length - 1 === i) || <span> | </span>}
          </li>
        ))}
      </ul>
      <p className="text-xs">Copyright ©{APP_NAME} 2025</p>
    </div>
  );
};

export default Footer;