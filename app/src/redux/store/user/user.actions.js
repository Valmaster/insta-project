import axios from "axios";

export const userSuccess = users => ({
    type: 'USERS',
    payload: users
})

export const usersFailed = error => ({
    type: 'USERS_FAILED',
    payload: 'error'
})

export const userLogged = user => ({
    type: 'USER_LOGGED',
    payload: user
})

export const login = (credentials) => async dispatch => {
    return axios
        .post("http://localhost:3001/auth/signin", credentials)
        .then(({data}) => {
            data.status !== 422
                ? dispatch(userLogged(data))
                : dispatch(usersFailed('Erreur lors de la connexion'));
        })
        .catch((error) => {
            dispatch(usersFailed('Erreur lors de la connexion'))
        })
}

export const getUsers = () => async dispatch => {
    axios.get('http://localhost:3001/users')
        .then((response) => {
            console.log(response);
            response.status === 200
                ? dispatch(userSuccess(response.data))
                : dispatch(usersFailed('Erreur lors du chargement de la liste des users'));
        })
        .catch((error) => {
            dispatch(usersFailed('Erreur lors du chargement de la liste des users'))
        })
}
