import React from "react";
import Title from "../layout/Title";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <>
    <Title pageName='404' />
    <p className="mt-16 leading-8 text-center">
      Sorry... <br />
      the page doesn't exist. <br />
      <Link to='/' className="text-blue-600 underline text-lg">Go Back</Link>
    </p>
    </>
  );
};

export default NotFoundPage;