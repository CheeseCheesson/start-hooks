/* eslint-disable */

import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "./../../common/divider";
const RenderCountExample = () => {
    const refText = useRef("Some text in the userRef");
    const incRef = useRef(0);

    const [isOtherState, setIsOtherState] = useState(false);
    const toggle = () => {
        setIsOtherState(!isOtherState);
        console.log(isOtherState);
    };
    useEffect(() => {
        incRef.current++;
    });

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>{refText.current}</p>
            <p>current: {incRef.current}</p>
            <button className="btn btn-primary" onClick={toggle}>
                кнопка
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
