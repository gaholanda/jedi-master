import React from "react";
import { Link } from "react-router-dom";

import "../assets/scss/routes/home.scss";

function _Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="flex flex--justify-around">
          <div className="title">
            <h1 className="title--primary-color title--weight-100">
              Welcome to <strong>iClinic</strong>
            </h1>
            <p>FRONTEND CHALLENGE</p>
          </div>
          <Link
            className="btn btn-primary"
            to={`${process.env.PUBLIC_URL}/master`}
          >
            START
          </Link>
        </div>
      </div>
    </div>
  );
}

export default _Home;
