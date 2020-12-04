import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AppContext from "../contexts/AppContext";

const PrivateRoute = ({component: Component, auth, ...rest}) => {
    const {isLogin} = useContext(AppContext)
    return (
        <Route
            {...rest}
            render={(props) => {
                if (!isLogin) {
                    return <Redirect to="/login"/>;
                } else {
                    return <Component {...props} />;
                }
            }}
        />
    );
}


export default PrivateRoute;
