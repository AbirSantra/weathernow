import React from "react";
import "./header.css";
import sunlogo from "../../img/sun.png";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={sunlogo} alt="" />
            </div>
            <div className="title">
                Weather<span className="now">Now</span>
                <p className="powered">Powered by OpenWeatherAPI</p>
            </div>
        </div>
    );
};

export default Header;
