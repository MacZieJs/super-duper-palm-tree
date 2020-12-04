import React, {useState, useEffect} from 'react';
import AuthServices from "../../services/AuthServices";
import UserServices from "../../services/UserServices";

const Dashboard = (props) => {
    const [user, setUser] = useState(null)
    const [users, setUsers] = useState(null)

    useEffect( () =>{
        getUser()
        getUsers()
    }, [])

    const getUser = async () => {
        const _user = await AuthServices.getUser()
        console.log(_user)
        setUser(_user)
    }
    const getUsers = async () => {
        const _users = await UserServices.getAll()
        setUsers(_users)
    }
    return (
        <div>
            <h3>Dashboard Page</h3>
            {user && <div>
                Current User: {user.username}<br />
                Email: {user.email}
            </div>}
            <hr />
            <div>All User:</div>
            {users && users.map((user) => {
                return <div key={user.id}>{user.username}, {user.email}</div>
            })}
        </div>
    )
}
export default Dashboard