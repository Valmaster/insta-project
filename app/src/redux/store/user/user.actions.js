
export const RESET_USER = 'RESET_USER';

export const resetUser = () => ({
    type: RESET_USER,
});

export const userSuccess = users => ({
    type: 'USERS',
    payload: users
})

export const usersFailed = error => ({
    type: 'USERS_FAILED',
    payload: 'error'
})

export const getUsers = () => async dispatch => {
    try {
        const response = await fetch('http://localhost:3001/users', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        const users = await response.json();

        if (response.ok) dispatch(userSuccess(users))
        else dispatch(usersFailed(users))
    }catch(e) {
        dispatch(usersFailed(e))
    }
}
