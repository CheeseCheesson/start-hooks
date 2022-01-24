/* eslint-disable */
import React, { useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "./../../common/divider";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = (params) => {
        console.log(inputRef.current.value);
        inputRef.current.focus();
    };
    const handleClickWidth = () => {
        inputRef.current.style.width = "300px"; // clientWidth
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />
            <button className="btn btn-warning m-2" onClick={handleClick}>
                Кнопка
            </button>
            <button className="btn btn-danger m-2" onClick={handleClickWidth}>
                Изменить ширину объекта
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
