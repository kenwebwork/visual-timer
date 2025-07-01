import React from 'react'
import { APP_NAME } from "../utils/constants";
import { useEffect } from "react";

interface TitleProps {
  pageName: string;
  isRunning?: boolean;
}

const Title: React.FC<TitleProps> = ({pageName}) => {

  useEffect(() => {
    document.title = pageName + " | " + APP_NAME;
  }, [pageName]);

  return null;
}

export default Title;