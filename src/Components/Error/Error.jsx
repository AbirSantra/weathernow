import React from "react";
import PropTypes from "prop-types";
import "./error.css";

const Error = ({ message }) => {
    return <div className="error">{message}</div>;
};

Error.propTypes = {
    message: PropTypes.string,
};

Error.defaultProps = {
    message: "An error occured",
};

export default Error;
