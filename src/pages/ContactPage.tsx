import { Helmet } from "react-helmet-async";
import { APP_NAME, EMAIL_ADSRESS, X_ACCOUNT } from "../utils/constants";

function ContactPage(){
  return (
    <>
    <Helmet>
      <title>{`Contact - ${APP_NAME}`}</title>
    </Helmet>
    <h1>Contact</h1>
    <p>If you have any questions or suggestions, do not hesitate to contact us.</p>
    <ul>
      <li>Email: {EMAIL_ADSRESS}</li>
      <li>X: {X_ACCOUNT}</li>
    </ul>
    </>
  );
};

export default ContactPage;