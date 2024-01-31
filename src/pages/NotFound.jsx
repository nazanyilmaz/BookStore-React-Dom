import React from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const { state } = useLocation();

  return (
    <div className="container py-6">
      <img
        className="img-fluid rounded ms-5"
        src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif"
      />

      <p className="text-center fs-3 my-4">
        Sorry, This page could not be found!
      </p>

      <div className="d-flex justify-content-center">
        <Link className="bg-primary text-white p-2 rounded" to={"/"}>
          Home
        </Link>
      </div>
      {state && (
        <p className="fs-3 text-center my-4">
          Hata kodunuz
          <span className="badge bg-warning mx-4"> {state}</span>
        </p>
      )}
    </div>
  );
};

export default NotFound;
