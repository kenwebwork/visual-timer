import { APP_NAME } from "../utils/constants";
import { Helmet } from "react-helmet-async";

function Title(porps: {pageName:string}){
  return (
    <Helmet>
      <title>{porps.pageName} | {APP_NAME}</title>
      <meta name="description" content="B-Timer is easy-to-read timer that is inspired Pomodoro Technique. 25 minutes work and 5 minutes break is one of the schedule we recommend. We’re rooting for you—let B-Timer boost your productivity and keep you in the zone!" />
    </Helmet>
  );
};

export default Title;