import React from 'react'
import { APP_NAME } from "../utils/constants";
import { useEffect } from "react";

interface TitleProps {
  pageName: string;
  isRunning?: boolean;
}

const Title: React.FC<TitleProps> = ({pageName, isRunning}) => {
  const runningIcon: string | undefined = isRunning ? "▶ " : "";

  useEffect(() => {
    document.title = runningIcon + pageName + " | " + APP_NAME;
  }, [pageName, isRunning]);

  return null;
}

export default Title;