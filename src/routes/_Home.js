import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Loading } from "../components";
import { GetYourMaster } from "../api";

import "../assets/scss/routes/home.scss";

function _Home() {
  const [disabled, setDisabled] = useState(false);

  const sendRequest = () => {
    setDisabled(true);
    GetYourMaster()
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

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
          {disabled && <Loading />}
          <button
            className="btn btn-primary"
            disabled={disabled}
            onClick={sendRequest}
          >
            START
          </button>
        </div>
      </div>
    </div>
  );
}

export default _Home;
