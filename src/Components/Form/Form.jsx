import React from "react";
import "./form.css";
import { useState } from "react";
import PropTypes from 'prop-types'

const Form = ({submitSearch}) => {
    const [location, setLocation] = useState('')


    const onSubmit = (e) => {
        e.preventDefault();
        if(location==='' || !location) return;
        // console.log(location);
        submitSearch(location);
    }


    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                aria-label="location"
                className="form-input"
                placeholder="Search location here"
                value={location}
                onChange={(e)=>{setLocation(e.target.value)}}
                required
            />
            <button type="submit" className="form-button" onClick={onSubmit}>
                SEARCH
            </button>
        </form>
    );
};

Form.propTypes = {
    submitSearch: PropTypes.func.isRequired
}

export default Form;
