import React from "react";
import Title from "../layout/Title";
import { MEDIUM_ACCOUNT, THREADS_ACCOUNT, X_ACCOUNT } from "../utils/constants";

const ContactPage: React.FC = () => {
  return (
    <>
    <Title pageName='Contact' />
    <h1>Contact</h1>
    <p>If you have any questions or suggestions, do not hesitate to contact us.</p>
    <ul>
      <li>
        X: <a href={X_ACCOUNT} target="_blank" rel="noopener noreferrer">X</a>
      </li>
      <li>
        Medium: <a href={MEDIUM_ACCOUNT} target="_blank" rel="noopener noreferrer">Medium</a>
      </li>
      <li>
        Threads: <a href={THREADS_ACCOUNT} target="_blank" rel="noopener noreferrer">Threads</a>
      </li>
    </ul>
    </>
  );
};

export default ContactPage;