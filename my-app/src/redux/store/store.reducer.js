import {combineReducers} from 'redux';
import UserReducer from './user/user.reducer';

const reducers = combineReducers({
    user: UserReducer,
});

export const RESET_STORE = 'RESET_STORE';

export const storeReducer = (state, action) => {
    if (action.type === RESET_STORE) {
        state = {};
    }

    return reducers(state, action);
};
