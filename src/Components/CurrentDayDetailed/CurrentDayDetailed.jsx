import React from "react";
import "./currentDayDetailed.css";

const CurrentDayDetailed = ({ forecastData }) => {
    return (
        <div className="detailed-container">
            <h1 className="detailed-heading">Today's Highlights</h1>
            <div className="detailed-info">
                {/* <div className="feelslike">{forecastData.feels_like}</div> */}
                <div className="temp_max card">Max {forecastData.temp_max}</div>
                <div className="temp_min card">Min {forecastData.temp_min}</div>
                <div className="sunrise card">
                    Sunrise{forecastData.sunrise}
                </div>
                <div className="sunset card">Sunset{forecastData.sunset}</div>
                <div className="humidity card">
                    Humidity {forecastData.humidity}
                </div>
                <div className="pressure card">
                    Pressure {forecastData.pressure}
                </div>
                <div className="windspeed card">
                    Speed {forecastData.windspeed}
                </div>
                <div className="rain card">Rain {forecastData.rain}</div>
                {/* <div className="visibility">
                Visibility {forecastData.visibility}
            </div> */}
            </div>
        </div>
    );
};

export default CurrentDayDetailed;
