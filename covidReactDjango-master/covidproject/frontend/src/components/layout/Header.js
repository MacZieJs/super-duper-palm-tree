import React, {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import LocalStorageServices from "../../services/LocalStorageServices";
import AuthServices from "../../services/AuthServices";
import AppContext from "../contexts/AppContext";

const Header = (props) => {
    const {isLogin, setIsLogin} = React.useContext(AppContext)
    const history = useHistory()
    const handleLogout = async () => {
        const res = await AuthServices.logout()
        LocalStorageServices.removeToken()
        history.push("/")
        setIsLogin(false)
    }
    const authLinks = (
        <ul>
            <li>
                <Link to="/dashboard">
                    Dashboard
                </Link>
            </li>
            <li>
                <Link to="/map">
                    Map
                </Link>
            </li>
            <li>
                <Link to="/contact">
                    Contact
                </Link>
            </li>
            <li>
                <a onClick={() => handleLogout()} href={"#"}>
                    Logout
                </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li>
                <Link to="/register">
                    Register
                </Link>
            </li>
            <li>
                <Link to="/login">
                    Login
                </Link>
            </li>
        </ul>
    );

    return (
        <nav>
            <React.Fragment>
                {isLogin ? authLinks : guestLinks}
            </React.Fragment>
        </nav>
    )
}

export default Header