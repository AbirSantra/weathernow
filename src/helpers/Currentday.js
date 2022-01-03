const Currentday = (data, name) => ({
    location: name,
    country: data.sys.country,
    temperature: ~~data.main.temp,
    weatherIcon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
    description: data.weather[0].main,
    feels_like: ~~data.main.feels_like,
});

export default Currentday;
