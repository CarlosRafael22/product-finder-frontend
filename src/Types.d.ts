interface User {
    name: string,
    email: string,
    username: string,
    userId: number,
    customerId: number
};

interface Action {
    type: string,
    payload: object
};