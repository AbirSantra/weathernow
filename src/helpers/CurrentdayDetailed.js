const CurrentdayDetailed = (data) => ({
    feels_like: data.main.feels_like,
    humidity: data.main.humidity,
    pressure: data.main.pressure / 1000,
    temp_max: data.main.temp_max,
    temp_min: data.main.temp_min,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    windspeed: data.wind.speed,
    rain: !data.rain ? 0 : Object.values(data.rain)[0],
    visibility: data.visibility / 1000,
});

export default CurrentdayDetailed;
