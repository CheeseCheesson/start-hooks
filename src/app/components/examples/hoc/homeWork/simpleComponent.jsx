/* eslint-disable */
import React, { useState } from "react";
import PropTypes from "prop-types";
const SimpleComponent = ({ onLogin, onLogOut, isAuth, text }) => {
    return (
        <button
            className="btn btn-primary mt-2"
            onClick={() => onLogin(isAuth)}
        >
            {text}
        </button>
    );
};
SimpleComponent.propTypes = {
    text: PropTypes.string,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
