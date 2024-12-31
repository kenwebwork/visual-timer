import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { APP_NAME } from "../utils/constants";

function NotFoundPage(){
  return (
    <>
    <Helmet>
      <title>{`404 - ${APP_NAME}`}</title>
    </Helmet>
    <p className="mt-16 leading-8 text-center">
      Sorry... <br />
      the page doesn't exist. <br />
      <Link to='/' className="text-blue-600 underline text-lg">Go Back</Link>
    </p>
    </>
  );
};

export default NotFoundPage;