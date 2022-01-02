import React from "react";
import PropTypes from "prop-types";
import CurrentDay from "../CurrentDay/CurrentDay";
import CurrentDayDetailed from "../CurrentDayDetailed/CurrentDayDetailed";
import "./forecast.css";

const Forecast = ({ forecast }) => {
    // console.log(forecast);
    return (
        <div className="forecast-container">
            <CurrentDay forecastData={forecast.currentDay}></CurrentDay>
            <CurrentDayDetailed
                forecastData={forecast.currentDayDetailed}
            ></CurrentDayDetailed>
        </div>
    );
};

Forecast.propTypes = {
    forecast: PropTypes.shape({
        Currentday: PropTypes.object,
    }),
};

export default Forecast;
