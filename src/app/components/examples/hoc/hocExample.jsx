/* eslint-disable */
import React from "react";
import Component from "./someComponent";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import withLogin from "./withLogin";

import withPropsStyles from "./withPropsStyles";
import SimpleComponent from "./homeWork/simpleComponent";
import withAuth from "./homeWork/whithAuth";

const HOCExample = () => {
    const ComponentWithAuth = withLogin(Component);
    const ComponentWithPropsStyle = withPropsStyles(Component);
    const NewComponent = withPropsStyles(ComponentWithAuth);

    // homeWork
    const SimpleComponentWithPropsStyle = withPropsStyles(SimpleComponent);
    const SimpleComponentWithAuth = withAuth(SimpleComponent);
    return (
        <>
            <CardWrapper>
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <Component />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                <Divider />
                <ComponentWithAuth />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>3. HOC With Styles and Props</SmallTitle>
                <ComponentWithPropsStyle />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
                <NewComponent />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>5. HomeWork HOC SimpleComponent</SmallTitle>
                <SimpleComponentWithAuth />
            </CardWrapper>
        </>
    );
};

export default HOCExample;
