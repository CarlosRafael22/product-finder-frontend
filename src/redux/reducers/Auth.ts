import { AnyAction } from 'redux';
import { SAVEUSER } from '../actions/Auth';

const initialState = {
    user: {},
    loggedIn: false
};


const reducer = (state = initialState, action: AnyAction) => {
    const {
        type,
        payload
    } = action;

    switch(type) {
        case SAVEUSER:
            return {
                ...state,
                user: payload,
                loggedIn: true
            };
        default:
            return { ...state };
    }
};

export default reducer;