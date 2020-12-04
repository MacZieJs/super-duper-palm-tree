import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Header from './layout/Header';

import Register from "./page/Register";
import Login from "./page/Login";
import PrivateRoute from "./common/PrivateRoute"
import Dashboard from "./page/Dashboard"
import Map from "./page/Map"
import Contact from "./page/Contact"
import AppContext from "./contexts/AppContext";
import LocalStorageServices from "../services/LocalStorageServices";


const App = (props) => {
    const getIsLogin = () => {
        const token = LocalStorageServices.getToken()
        return token ? true: false
    }
    const [isLogin, setIsLogin] = useState(getIsLogin())


    return (<Router>
            <AppContext.Provider value={{isLogin, setIsLogin}}>
                <div>
                    <Header/>
                    <Switch>
                        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                        <PrivateRoute exact path="/" component={Dashboard}/>
                        <PrivateRoute exact path="/map" component={Map}/>
                        <PrivateRoute exact path="/contact" component={Contact}/>

                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/login" component={Login}/>
                    </Switch>
                </div>
            </AppContext.Provider>
        </Router>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'));