import { NavLink } from "react-router-dom";
import { PAGES } from "../../utils/constants";

function MenuCard(props: {setIsOpen: (isOpen: boolean) => void }){
  return (
    <nav className="absolute top-full right-0 bg-white translate-x-2 translate-y-4 rounded-md py-2 px-4 drop-shadow-md z-10">
      <ul className="min-w-24">
      {PAGES.map((page) => (
        <li key={page.url} className="mb-2">
          <NavLink
            to={page.url}
            onClick={() => props.setIsOpen(false)}
            className={({ isActive }: any) => (isActive ? 'text-blue-500 font-bold' : '')}
          >
            - {page.title}
          </NavLink>
        </li>
      ))}
      </ul>
    </nav>
  );
};

export default MenuCard;