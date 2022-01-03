import React from "react";
import "./main.css";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import Form from "../Form/Form";
import Error from "../Error/Error";
import Forecast from "../Forecast/Forecast";
import useForecast from "../../hooks/useForecast";

const Main = () => {
    const { isError, isLoading, forecast, submitRequest, background } =
        useForecast();

    const onSubmit = (value) => {
        submitRequest(value);
    };

    console.log(background);
    return (
        <>
            <div className="main">
                <div className="backImg">
                    {/* <img src={background} alt="" /> */}
                </div>
                <div className="main-info">
                    <div className="header-content">
                        <Header></Header>
                        {/* Form */}
                        {<Form submitSearch={onSubmit} />}
                    </div>
                    {/* Error */}
                    {isError && <Error message={isError} />}
                    {/* Loader */}
                    {isLoading && <Loader></Loader>}
                    {/* Forecast */}
                    {forecast && !isLoading && (
                        <Forecast forecast={forecast}></Forecast>
                    )}
                </div>
            </div>
        </>
    );
};

export default Main;
