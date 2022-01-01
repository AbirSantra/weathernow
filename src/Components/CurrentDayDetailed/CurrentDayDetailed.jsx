import React from 'react'

const CurrentDayDetailed = ({forecastData}) => {
    return (
        <div>
            {/* <div className="feelslike">{forecastData.feels_like}</div> */}
            <div className="humidity">{forecastData.humidity}</div>
            <div className="pressure">{forecastData.pressure}</div>
            <div className="temp_max">{forecastData.temp_max}</div>
            <div className="temp_min">{forecastData.temp_min}</div>
            {/* <div className="sunrise">{forecastData.sunrise}</div>
            <div className="sunset">{forecastData.sunset}</div> */}
        </div>
    )
}

export default CurrentDayDetailed
