const Dials: React.FC = () => {

  interface dials {
    value: number;
    top: string;
    left: string;
  }

  const timeDials: dials[] = [
    {value: 0, top: '-15px', left: '50%'},
    {value: 5, top: '2.5%', left: '23%'},
    {value: 10, top: '22%', left: '1.5%'},
    {value: 15, top: '50%', left: '-19px'},
    {value: 20, top: '78%', left: '1.5%'},
    {value: 25, top: '97.5%', left: '21.3%'},
  ] 

  return (
    <>
      {timeDials.map((dial) => (
      <span
        key={dial.value}
        className="absolute -translate-x-1/2 -translate-y-1/2 text-lg font-bold dark:text-[#ccc]"
        style={{top: dial.top, left: dial.left}}
      >
        {dial.value}
      </span>
      ))}
    </>
  );
};

export default Dials;