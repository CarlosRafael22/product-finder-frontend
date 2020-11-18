export const SAVEUSER = 'user/saveUser';

export const saveUser = (user: User) => ({
    type: SAVEUSER,
    payload: user
});