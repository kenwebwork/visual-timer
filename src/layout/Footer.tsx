import { APP_NAME } from "../utils/constants";

function Footer(){
  return (
    <p className="max-w-96 m-auto pt-5 pb-1 text-sm text-center text-gray-600">
      {`Copyright © ${APP_NAME} 2025`}
    </p>
  );
};

export default Footer;