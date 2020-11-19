interface User {
    name: string,
    email: string,
    username: string,
    userId: number,
    customerId: number
};

interface AuthState {
    user?: User,
    loggedIn: boolean
}

interface saveUserAction {
    type: string,
    payload: User
}

type AuthActionTypes = saveUserAction