import React from "react";
import "./sevenday.css";

const SevenDay = ({ forecastData }) => {
    return (
        <div className="sevenday-container">
            <h2 className="sevenday-heading">Weekly Highlights</h2>
            <div className="sevenday-info">
                {forecastData.map((day) => (
                    <div className="sevenday-card" key={day.weekday}>
                        <div className="weekday">{day.weekday}</div>
                        <div className="week-icon">
                            <img src={day.weatherIcon} alt="" />
                        </div>
                        <div className="temp-info">
                            <div className="maxtemp">{day.max_temp}&deg;</div>
                            <div className="mintemp">{day.min_temp}&deg;</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SevenDay;
