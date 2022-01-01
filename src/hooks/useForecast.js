import { useState } from "react";
import axios from "axios";
import Currentday from "../helpers/Currentday";
import CurrentdayDetailed from "../helpers/CurrentdayDetailed";
import SevenDay from "../helpers/SevenDay";

const API_KEY = "7e8d25e94182d5ebe0386c6ce1b812a2";
const BASE_URL = `api.openweathermap.org/data/2.5/weather`;
const CORS_URL = `https://the-ultimate-api-challenge.herokuapp.com`;
const CURRENTDAY_URL = `${CORS_URL}/${BASE_URL}`;
const DAILY_URL = `${CORS_URL}/https://api.openweathermap.org/data/2.5/onecall`

const ACESS_KEY= `pEsQ3RGbOlsWjrzwzSuM7wMb6Je_z2qKW0jsKzNv5wI`;
const UNSPLASH_URL = `https://api.unsplash.com/photos/random`
const IMG_URL = `${CORS_URL}/${UNSPLASH_URL}`

const useForecast = () => {
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);
    const [background, setBackground] = useState('');

    const gatherForecastData = ({data,sevenDay}) => {
        const currentDay = Currentday(data, data.name);
        const currentDayDetailed = CurrentdayDetailed(data);
        const sevenday = SevenDay(sevenDay);
        // console.log(currentDay);
        // console.log(currentDayDetailed);
        setForecast({currentDay,currentDayDetailed,sevenday});
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

            //api call for background image
            const category = data.weather[0].main;
            console.log(category);
            const imgData = await axios(IMG_URL,{
                params: {
                    query: category,
                    client_id: ACESS_KEY,
                    orientation: 'landscape',
                }
            })
            setBackground(imgData.data.urls.regular);
            console.log(background);
            console.log(imgData);

            //api call for daily forecast
            const lat = data.coord.lat;
            const lon = data.coord.lon;

            const dailyData = await axios(DAILY_URL,{
                params: {
                    lat: lat,
                    lon: lon,
                    appid: API_KEY,
                    units: "metric"
                }
            });

            if (!dailyData.data || dailyData.data.length === 0) {
                setError("No data or data length!");
                return;
            }
            console.log(dailyData.data.daily);
            const sevenDay = dailyData.data.daily;

            gatherForecastData({data,sevenDay});
        } catch (error) {
            setError('Api server error')
            setLoading(false)
        }
    };

    return {
        isError,
        isLoading,
        forecast,
        submitRequest,
        background
    };
};

export default useForecast;
