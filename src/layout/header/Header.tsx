import React from "react";
import SiteLogo from "../../utils/SiteLogo";
import Menu from "./Menu";

const Header: React.FC = () => {
  return (
    <div className="relative flex justify-between max-w-96 m-auto">
      <SiteLogo />
      <Menu />
    </div>
  );
};

export default Header;