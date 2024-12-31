import { APP_NAME } from "../utils/constants";
import { Helmet } from "react-helmet-async";

function Title(porps: {pageName:string}){
  return (
    <Helmet>
      <title>{porps.pageName} - {APP_NAME}</title>
    </Helmet>
  );
};

export default Title;