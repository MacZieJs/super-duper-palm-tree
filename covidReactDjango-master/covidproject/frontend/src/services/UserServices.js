import LocalStorageServices from "./LocalStorageServices";

class UserServices {
    static getAll = () => {
        const token = LocalStorageServices.getToken()
        return fetch('/api/users/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':`Token ${token}`,
            },
        }).then(response => {
            return response.json()
        }).then(data => {
            return data
        }).catch(error => {
            console.log(error)
            return error
        });
    }
}

export default UserServices