import { SAVE_USER } from './actions';

export const initialState: AuthState = {
    user: undefined,
    loggedIn: false
};


const reducer = (state = initialState, action: AuthActionTypes): AuthState => {
    const {
        type,
        payload
    } = action;

    switch(type) {
        case SAVE_USER:
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