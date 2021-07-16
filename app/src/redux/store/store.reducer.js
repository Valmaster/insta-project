import {combineReducers} from 'redux';
import UserReducer from './user/user.reducer';
import PublicationReducer from "./publication/publication.reducer";

const reducers = combineReducers({
    user: UserReducer,
    publication: PublicationReducer
});

export const RESET_STORE = 'RESET_STORE';

export const storeReducer = (state, action) => {
    if (action.type === RESET_STORE) {
        state = {};
    }

    return reducers(state, action);
};
