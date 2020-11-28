import React from "react";
import { Link } from "react-router-dom";

import "../assets/scss/home.scss";

export default function _Home() {
  return (
    <div className="home">
      <div className="flex">
        <div className="title">
          <h1 className="title--primary-color title--weight-100">
            Welcome to <strong>iClinic</strong>
          </h1>
          <p>FRONTEND CHALLENGE</p>
        </div>
        <Link className="btn btn-primary" to="/master">
          START
        </Link>
      </div>
    </div>
  );
}
