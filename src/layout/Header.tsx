import SiteLogo from "../utils/SiteLogo";

function Header(){
  return (
    <>
      <SiteLogo />
      <div className="py-1 px-2 bg-white rounded-md">Menu</div>
    </>
  );
};

export default Header;