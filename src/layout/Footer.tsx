import { APP_NAME } from "../utils/constants";

function Footer(){
  return (
    <p className="pt-5 pr-5 pb-1 text-right">{`Copyright © ${APP_NAME} 2025`}</p>
  );
};

export default Footer;