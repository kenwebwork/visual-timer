import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

interface HandleBreakModeProps {
  setIsBreakMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const HanldBreakMode: React.FC<HandleBreakModeProps> = ({ setIsBreakMode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    setIsBreakMode(false);
  }, [pathname]);
  
  return null;
}

export default HanldBreakMode