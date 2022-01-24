/* eslint-disable */
import React, { useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import { useEffect } from "react";

function factorial(n) {
    if (n < 0) return;
    return n ? n * factorial(n - 1) : 1;
}
function runFactorial(n) {
    console.log("run render factorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(5);

    const [otherState, setOtherState] = useState(false);
    const buttonColor = otherState ? "warning" : "primary";

    useEffect(() => {
        console.log("render useEffect", { fact });
    });
    const fact = useMemo(() => runFactorial(value), [value]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value {value}</p>
                <p>Result factorial {fact}</p>
                <button
                    className="btn btn-primary ms-md-2 m-2"
                    onClick={() => setValue((prevState) => prevState + 1)}
                >
                    Positive
                </button>
                <button
                    className="btn btn-primary ms-md-2 m-2"
                    onClick={() => setValue((prevState) => prevState - 1)}
                >
                    Negative
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn ms-md-2 m-2  btn-" + buttonColor}
                    onClick={() => setOtherState((prevState) => !prevState)}
                >
                    other
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
