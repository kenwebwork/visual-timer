import { useState } from "react";
import MenuButton from "./MenuButton";
import MenuCard from "./MenuCard";


function Menu(){
  
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <MenuCard setIsOpen={setIsOpen} />}
    </>
  );
};

export default Menu;