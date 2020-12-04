import React, {useState} from 'react';
import AuthServices from "../../services/AuthServices";
import {useHistory} from "react-router-dom";

const Register = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [errorObj, setErrorObj] = useState({})
    const history = useHistory()

    const registerReq = async () => {
        const formData = {
            username, password, email
        }
        const res = await AuthServices.register(formData)
        if (res.ok) {
            const data = await res.json()
            history.push("/")
            setErrorObj({})
        } else {
            const err = await res.json()
            setErrorObj(err)
        }
    }
    const handleFormSubmit = () => {
        registerReq()
    }

    return (
        <div>
            <h3>Register Page</h3>
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <div>
                    <label>Username:</label>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                    {errorObj.username ? <span>{errorObj.username[0]}</span> : null}
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type={"password"}
                    />
                    {errorObj.password ? <span>{errorObj.password[0]}</span> : null}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type={"email"}
                    />
                    {errorObj.email ? <span>{errorObj.email[0]}</span> : null}
                </div>

                <div>
                    <input type={"submit"} value={"Submit"}/>
                </div>

            </form>
        </div>

    )
}
export default Register