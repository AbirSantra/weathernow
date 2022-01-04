import React from "react";
import "./currentDayDetailed.css";

const CurrentDayDetailed = ({ forecastData }) => {
    return (
        <div className="detailed-container">
            <h2 className="detailed-heading">Today's Highlights</h2>
            <div className="detailed-info">
                <div className="temp_max card">
                    <div className="label">Max</div>
                    <div className="data">
                        {forecastData.temp_max}
                        <span className="unit">&deg;C</span>{" "}
                    </div>
                </div>
                <div className="temp_min card">
                    <div className="label">Min</div>
                    <div className="data">
                        {forecastData.temp_min}
                        <span className="unit">&deg;C</span>{" "}
                    </div>
                </div>
                <div className="sunrise card">
                    <div className="label">Sunrise</div>
                    <div className="data">
                        {forecastData.sunrise}
                        <span className="unit">AM</span>{" "}
                    </div>
                </div>
                <div className="sunset card">
                    <div className="label">Sunset</div>
                    <div className="data">
                        {forecastData.sunset}
                        <span className="unit">PM</span>{" "}
                    </div>
                </div>
                <div className="humidity card">
                    <div className="label">Humidity</div>
                    <div className="data">
                        {forecastData.humidity}
                        <span className="unit">%</span>{" "}
                    </div>
                </div>
                <div className="pressure card">
                    <div className="label">Pressure</div>
                    <div className="data">
                        {forecastData.pressure}
                        <span className="unit">bar</span>{" "}
                    </div>
                </div>
                <div className="windspeed card">
                    <div className="label">Windspeed</div>
                    <div className="data">
                        {forecastData.windspeed}
                        <span className="unit">m/s</span>{" "}
                    </div>
                </div>
                <div className="rain card">
                    <div className="label">Rain</div>
                    <div className="data">
                        {forecastData.rain}
                        <span className="unit">mm</span>{" "}
                    </div>
                </div>
                {/* <div className="visibility">
                Visibility {forecastData.visibility}
            </div> */}
            </div>
        </div>
    );
};

export default CurrentDayDetailed;
