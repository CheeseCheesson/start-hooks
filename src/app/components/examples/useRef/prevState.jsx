/* eslint-disable */
import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "./../../common/divider";

const PrevStateExample = () => {
    const prevState = useRef("");
    const [isOtherState, setIsOtherState] = useState("false");

    const toggle = () => {
        setIsOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };
    useEffect(() => {
        prevState.current = isOtherState;
    }, [isOtherState]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>PrevState: {prevState.current}</p>
            <p>CurrentState: {isOtherState}</p>
            <button className="btn btn-primary" onClick={toggle}>
                кнопка
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
