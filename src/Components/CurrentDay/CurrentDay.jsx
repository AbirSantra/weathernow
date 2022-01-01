import React from "react";
import "./currentday.css";

const CurrentDay = ({ forecastData }) => {
    // console.log(forecastData);
    const d = new Date();
    const dayNumber = d.getDay();
    const dateNumber = d.getDate();
    const monthNumber = d.getMonth();
    const day = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return (
        <div className="currentday">
            <div className="description">{forecastData.description}</div>
            <div className="temp-symbol">
                <div className="temperature">
                    {forecastData.temperature}
                    <span className="degree">&deg;C</span>
                </div>
                <div className="weathericon">
                    <img src={forecastData.weatherIcon} alt="" />
                </div>
            </div>
            <div className="date">{`${day[dayNumber]}, ${dateNumber} ${month[monthNumber]}`}</div>
            <div className="name">{forecastData.location}</div>
            <div className="country">{forecastData.country}</div>
        </div>
    );
};

export default CurrentDay;
