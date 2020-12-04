import LocalStorageServices from "./LocalStorageServices";

class AuthServices {
    static login = (username, password) => {
        const formData = {username, password}
        return fetch('/api/auth/login/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(response => {
            return response
        }).catch(error => {
            console.log(error)
            return error
        });
    }

    static register = (formData) => {
        return fetch('/api/auth/register/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(response => {
            return response
        }).catch(error => {
            console.log(error)
            return error
        });
    }
    static logout = () => {
        const token = LocalStorageServices.getToken()
        console.log(token)
        return fetch('/api/auth/logout/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':`Token ${token}`,
            },
        }).then(response => {
            return response
        }).catch(error => {
            console.log(error)
            return error
        });
    }

    static getUser = () => {
        const token = LocalStorageServices.getToken()
        return fetch('/api/auth/user/', {
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

export default AuthServices