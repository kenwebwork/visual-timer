import React from "react";
import { APP_NAME, PAGES } from "../utils/constants";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="max-w-96 m-auto pt-4 pb-1 text-sm text-center text-gray-600">
      <ul className="mb-3 flex justify-center">
        {PAGES.map((page, i) => (
          <li>
            <Link to={page.url} className="ml-1 mr-1 underline">{page.title}</Link>
            {(PAGES.length - 1 === i) || <span> | </span>}
          </li>
        ))}
      </ul>
      <p className="text-xs">{`Copyright ©${APP_NAME} 2025`}</p>
    </div>
  );
};

export default Footer;