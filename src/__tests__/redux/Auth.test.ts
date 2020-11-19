import { SAVE_USER, saveUser } from '../../redux/auth/actions';
import authReducer, { initialState } from '../../redux/auth/reducers';


const user = {
    name: 'Test',
    email: 'test@gmail.com'
};


describe('Test action creators from Auth', () => {
    test('Should return right action', () => {
        const action = saveUser(user);
        expect(action.payload).toBe(user);
        expect(action.type).toBe(SAVE_USER);
    })
})


describe('Test reducer cases from Auth', () => {
    test('Should return right state for SAVEUSER', () => {
        const action = saveUser(user);
        const newState = authReducer(initialState, action);

        console.log('--------------------------------')
        console.log(newState)
        expect(newState.loggedIn).toBe(true);
        expect(newState.user).toBe(user);
    })
})