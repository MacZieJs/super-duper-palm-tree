import React, {useState, useContext} from 'react';
import AuthServices from '../../services/AuthServices'
import LocalStorageServices from "../../services/LocalStorageServices";
import AppContext from "../contexts/AppContext";
import { useHistory } from "react-router-dom";

const Login = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const history = useHistory()
    const {setIsLogin} = useContext(AppContext)

    const loginReq = async () => {
        const res = await AuthServices.login(username, password)
        if (res.ok) {
            const data = await res.json()
            LocalStorageServices.setToken(data.token)
            setIsLogin(true)
            history.push("/")
            setErrMsg("")
        } else {
            const err = await res.json()
            setErrMsg("Login Fail")
        }
    }
    const handleFormSubmit = () => {
        loginReq()
    }
    return (
        <div>
            <h3>Login Page</h3>
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <div>
                    <label>Username:</label>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type={"password"}
                    />
                </div>
                <div>
                    <input type={"submit"} value={"Submit"}/>
                </div>
                <div>{errMsg || null}</div>
            </form>
        </div>
    )
}
export default Login