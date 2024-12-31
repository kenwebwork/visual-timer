import { APP_NAME } from "../utils/constants";
import { Helmet } from "react-helmet-async";

function AboutPage(){
  return (
    <>
    <Helmet>
      <title>{`About - ${APP_NAME}`}</title>
    </Helmet>
    <h1>About</h1>
    <h2>What's {APP_NAME}?</h2>
    <p>text is here description is here text is here description is here text is here description is here text is here description is here <a>link</a> text is here description is here text is here description is here text is here description is here </p>
    <h2>Recommended</h2>
    <p>text is here</p>
    <ul>
      <li>2 hours: 4 x 25 min work & 5 min break</li>
      <li>1.5 hours: 45 min work & 10 min break & 45 min work</li>
    </ul>
    </>
  );
};

export default AboutPage;