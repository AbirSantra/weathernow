import { useState } from "react";
import axios from "axios";
import Currentday from "../helpers/Currentday";
import CurrentdayDetailed from "../helpers/CurrentdayDetailed";
import SevenDay from "../helpers/SevenDay";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = `api.openweathermap.org/data/2.5/weather`;
const CORS_URL = `https://`;
const CURRENTDAY_URL = `${CORS_URL}/${BASE_URL}`;
const DAILY_URL = `https://api.openweathermap.org/data/2.5/onecall`;

const useForecast = () => {
	const [isError, setError] = useState(false);
	const [isLoading, setLoading] = useState(false);
	const [forecast, setForecast] = useState(null);

	const gatherForecastData = ({ data, sevenDay }) => {
		const currentDay = Currentday(data, data.name);
		const currentDayDetailed = CurrentdayDetailed(data);
		const sevenday = SevenDay(sevenDay);
		// console.log(currentDay);
		// console.log(currentDayDetailed);
		setForecast({ currentDay, currentDayDetailed, sevenday });
		setLoading(false);
	};

	const submitRequest = async (location) => {
		try {
			setLoading(true);
			setError(false);

			//api call for current day info
			const { data } = await axios(CURRENTDAY_URL, {
				params: {
					q: location,
					appid: API_KEY,
					units: "metric",
				},
			});
			if (!data || data.length === 0) {
				setError("No data or data length!");
				return;
			}
			console.log(data);

			//api call for daily forecast
			const lat = data.coord.lat;
			const lon = data.coord.lon;

			const dailyData = await axios(DAILY_URL, {
				params: {
					lat: lat,
					lon: lon,
					appid: API_KEY,
					units: "metric",
					cnt: 7,
				},
			});

			if (!dailyData.data || dailyData.data.length === 0) {
				setError("No data or data length!");
				return;
			}
			console.log(dailyData.data.daily);
			const sevenDay = dailyData.data.daily;

			gatherForecastData({ data, sevenDay });
		} catch (error) {
			setError("Api server error");
			console.log(error);
			setLoading(false);
		}
	};

	return {
		isError,
		isLoading,
		forecast,
		submitRequest,
	};
};

export default useForecast;
