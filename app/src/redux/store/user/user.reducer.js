const initialState = {
    error: '',
    user_logged: {},
    users: []
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERS':
            return {...state, users: action.payload}
        case 'USER_LOGGED':
            return {...state, user_logged: action.payload}
        case 'USERS_FAILED':
            return {...state, error: action.payload}
        case 'RESET_USER':
            return {...state, users: []}
        default:
            return state;
    }
}

export default UserReducer;
