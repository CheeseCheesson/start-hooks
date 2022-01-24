/* eslint-disable */
import React, { useState } from "react";

const withAuth = (Componet) => (props) => {
    const [isData, setIsData] = useState();
    const isAuth = !!localStorage.getItem("auth");

    console.log("localStorage.getItem", isAuth);
    const handleAuth = (isAuth) => {
        if (isAuth) {
            localStorage.removeItem("auth");
            setIsData(false);
        } else {
            localStorage.setItem("auth", "auth");
            setIsData(true);
        }
    };
    return (
        <>
            {
                <Componet
                    {...props}
                    text={isData ? "Выйти" : "Войти"}
                    isAuth={isAuth}
                    onLogin={handleAuth}
                />
            }
        </>
    );
};

export default withAuth;
