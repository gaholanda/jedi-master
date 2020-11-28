import React from "react";

import { Back, Button, Avatar, YourMaster } from "../components";

import "../assets/scss/routes/master.scss";
import light from "../assets/scss/theme/modules/_light.module.scss";
import dark from "../assets/scss/theme/modules/_dark.module.scss";

export default function _Master() {
  const response = "dark";
  const theme = response === "light" ? light : dark;

  return (
    <div className={theme.background}>
      <div className="master">
        <Back className={theme.back} />
        <div className="flex flex--justify-center">
          <Button className={theme.btn} />
          <div className="master--info">
            <Avatar className={theme.avatar} />
            <YourMaster className={theme.color} name="Luke Skywalker" />
          </div>
        </div>
      </div>
    </div>
  );
}
