function MenuButton(props: {isOpen: boolean, setIsOpen: (isOpen: boolean) => void }){
  return (
    <div
      onClick={() => props.setIsOpen(!props.isOpen)}
      className={props.isOpen ?
        'relative py-1 px-2 rounded-md font-bold cursor-pointer translate-x-2 text-blue-600 bg-white'
        :
        'relative py-1 px-2 rounded-md font-bold cursor-pointer translate-x-2 text-white'}
    >
      Menu
    </div>
  );
};

export default MenuButton;