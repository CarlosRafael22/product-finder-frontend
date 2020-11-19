export const SAVE_USER = 'user/saveUser';

export const saveUser = (user: User): AuthActionTypes => ({
    type: SAVE_USER,
    payload: user
});