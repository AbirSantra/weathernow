import React from "react";
import PropTypes from "prop-types";
import CurrentDay from "../CurrentDay/CurrentDay";
import CurrentDayDetailed from "../CurrentDayDetailed/CurrentDayDetailed";
import SevenDay from "../SevenDay/SevenDay";
import "./forecast.css";

const Forecast = ({ forecast }) => {
    // console.log(forecast);
    return (
        <div className="forecast-container">
            <div className="left-panel">
                <CurrentDay forecastData={forecast.currentDay}></CurrentDay>
                <p className="crafted">Crafted & Coded by Abir Santra</p>
            </div>
            <div className="right-panel">
                <CurrentDayDetailed
                    forecastData={forecast.currentDayDetailed}
                ></CurrentDayDetailed>
                <SevenDay forecastData={forecast.sevenday}></SevenDay>
            </div>
        </div>
    );
};

Forecast.propTypes = {
    forecast: PropTypes.shape({
        Currentday: PropTypes.object,
    }),
};

export default Forecast;
