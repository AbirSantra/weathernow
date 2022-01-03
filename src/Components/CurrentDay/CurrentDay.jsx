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
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    return (
        <div className="currentday-container">
            <div className="weathericon">
                <img src={forecastData.weatherIcon} alt="" />
            </div>
            <div className="description">{forecastData.description}</div>
            <div className="temperature">
                {forecastData.temperature}
                <span className="degree">&deg;C</span>
            </div>
            <div className="feelslike">
                Feels like {forecastData.feels_like}&deg;
            </div>
            <div className="infomatics">
                <div className="date">
                    <div className="icon">
                        <i className="fas fa-calendar-day"></i>
                    </div>
                    <p>{`${day[dayNumber]}, ${dateNumber} ${month[monthNumber]}`}</p>
                </div>
                <div className="location">
                    <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <p>
                        {forecastData.location}, {forecastData.country}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CurrentDay;
