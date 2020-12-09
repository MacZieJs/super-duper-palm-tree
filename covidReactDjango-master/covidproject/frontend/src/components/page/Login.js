import React, {useState, useContext} from 'react';
import AuthServices from '../../services/AuthServices'
import LocalStorageServices from "../../services/LocalStorageServices";
import AppContext from "../contexts/AppContext";
import { useHistory } from "react-router-dom";
import {Form, Button, Image} from 'react-bootstrap';

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
    /*return (
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
    )*/
    return(
        <div className="text-center">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtKy-Nz1UREsRH7FGafRb42-bZcjp-Q4imdw&usqp=CAU" />
            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control size="sm" type="username" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
            </Form>
            <Button onClick={handleFormSubmit()}>Login</Button>
        </div>
    );
}
export default Login