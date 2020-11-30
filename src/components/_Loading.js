import React from "react";

import "../assets/scss/theme/_loading.scss";

const Loading = ({ progress, progressbar }) => (
  <div className={`progress ${progress}`}>
    <div className={`progress-bar ${progressbar}`}></div>
  </div>
);

export default Loading;
