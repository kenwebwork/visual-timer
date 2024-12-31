import SiteLogo from "../utils/SiteLogo";
import MenuButton from "../components/MenuButton";

function Header(){
  return (
    <div className="relative flex justify-between max-w-96 m-auto">
      <SiteLogo />
      <MenuButton />
    </div>
  );
};

export default Header;