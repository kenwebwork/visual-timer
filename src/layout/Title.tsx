import { APP_NAME } from "../utils/constants";
import { useEffect } from "react";

function Title({ pageName }: { pageName: string }) {
  useEffect(() => {
    document.title = `${pageName} | ${APP_NAME}`;
  }, [pageName]);

  return null;
}

export default Title;