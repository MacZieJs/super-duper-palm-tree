import React, { createContext } from "react";

const AppContext = createContext({
    isLogin: false,
    setIsLogin: () => {},
});

export default AppContext
