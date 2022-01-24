/* eslint-disable */
import React, { useState } from "react";
import CollapseWrapper from "../common/collapse";

const ListComponent = ({ children }) => {
   

    return React.Children.map(children, (child) => {
        const config = {
            ...child.props,
            value: child.props.value
        };

        return React.cloneElement(child, config);
    });
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ListComponent>
                <Component value={1} />
                <Component value={2} />
                <Component value={3} />
            </ListComponent>
        </CollapseWrapper>
    );
};

const Component = ({ value }) => {
    return <div>{value}. Компонент списка</div>;
};

export default ChildrenExercise;
