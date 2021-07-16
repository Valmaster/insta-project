import axios from "axios";
import jwtDecode from "jwt-decode";

export const getUsers = async () => {
    let response = await fetch('http://localhost:3001/auth/signin', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    return await response.json();
}

export const getAllUsers = async () => {
    let response = await fetch('http://localhost:3001/users', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    return await response.json();
}

export const postUser = async (user) => {
    let response = await fetch('http://localhost:3001/auth/signup', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(res => console.log(res));

    return await response.json();
}

export const logout = () => {
    window.localStorage.removeItem("accessToken")
    delete axios.defaults.headers["Authorization"]
}

export const setup = () => {
    let token = null;
    const store = JSON.parse(window.localStorage.getItem("persist:store"));
    if (store) token = JSON.parse(store.user).user_logged.accessToken;

    if (token) {
        const jwtData = jwtDecode(token)
        console.log(jwtData);
        if (jwtData.exp * 1000 > new Date().getTime()) {
            setAxiosToken(token)
        } else {
            logout()
        }
    } else {
        logout()
    }
}

export const isAuthenticated = () => {
    let token = null;
    const store = JSON.parse(window.localStorage.getItem("persist:store"));
    if (store) token = JSON.parse(store.user).user_logged.accessToken;

    if (token) {
        const jwtData = jwtDecode(token)
        if (jwtData.exp * 1000 > new Date().getTime()) {
            return true
        }
        return false
    }
    return false
}

export const setAxiosToken = (token) => {
    axios.defaults.headers["Authorization"] = "Bearer " + token;

}
