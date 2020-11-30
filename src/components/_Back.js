import React from "react";
import { Link } from "react-router-dom";

const Back = ({ className }) => (
  <div className="back">
    <Link className={className} to="/">
      <span>&nbsp;</span> back
    </Link>
  </div>
);

export default Back;
