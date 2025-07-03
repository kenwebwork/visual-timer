import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ResetBreakModeProps {
  setIsBreakMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResetBreakMode: React.FC<ResetBreakModeProps> = ({ setIsBreakMode }) => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    setIsBreakMode(false);
  }, [pathname]);

  return null;
}

export default ResetBreakMode;