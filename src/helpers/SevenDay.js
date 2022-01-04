import moment from "moment";

const getWeekDay = (date) => moment.unix(date).format("LLLL").substring(0, 3);

const SevenDay = (data) =>
    data.slice(1).map((day) => ({
        weatherIcon: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
        weekday: getWeekDay(day.dt),
        max_temp: ~~day.temp.max,
        min_temp: ~~day.temp.min,
    }));

export default SevenDay;
