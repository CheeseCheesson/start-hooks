/* eslint-disable */
import React, { useEffect, useState, useCallback } from "react";
import { PropTypes } from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    }, []);

    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            LogOut
        </button>
    );
};
const areEqal = (prevState, nextState) => {
    if (prevState.onLogOut !== nextState.onLogOut) {
        return false;
    }
    return true;
};

const MemoizedLogOut = React.memo(LogOutButton, areEqal);

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    console.log("state", state);

    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
        console.log("handleLogOut");
    }, []);
    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                initiate rerender
            </button>
            <MemoizedLogOut onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
