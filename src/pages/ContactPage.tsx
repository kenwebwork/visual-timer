import Title from "../layout/Title";
import { X_ACCOUNT } from "../utils/constants";

function ContactPage(){
  return (
    <>
    <Title pageName='Contact' />
    <h1>Contact</h1>
    <p>If you have any questions or suggestions, do not hesitate to contact us.</p>
    <ul>
      {/* <li>Email: {EMAIL_ADSRESS}</li> */}
      <li>X: {X_ACCOUNT}</li>
    </ul>
    </>
  );
};

export default ContactPage;