const Currentday = (data,name) =>({
    location: name,
    country: data.sys.country,
    temperature: ~~data.main.temp,
    weatherIcon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    description: data.weather[0].main,
});

export default Currentday;