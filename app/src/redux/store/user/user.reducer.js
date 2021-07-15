const initialState = {
    error: '',
    users: []
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERS':
            return {...state, users: action.payload}
        case 'USERS_FAILED':
            return {...state, error: action.payload}
        case 'RESET_USER':
            return {...state, users: []}
        default:
            return state;
    }
}

export default UserReducer;
