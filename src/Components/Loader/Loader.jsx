import React from "react";

import "./loader.css";

import dualBallLoader from "./Dual Ball-1s-200px.svg";

const Loader = () => (
    <div className="box">
        <img src={dualBallLoader} alt="loader" />
    </div>
);

export default Loader;
