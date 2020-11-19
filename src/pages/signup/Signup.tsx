import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../../redux/auth/actions';
import { RootState } from '../../redux/index';
import './Signup.css'


export const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const dispatch = useDispatch();
    const authUser = useSelector((state: RootState) => state.auth.user );

    const submitSignup = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(event.target);
        const userToCreate = {
            name,
            email,
            password,
            username: email
        };
        console.log(userToCreate)
        dispatch(saveUser(userToCreate));
        // history.push('/products');
    };

    console.log(name)
    console.log(authUser)
    return (
        <form className="main-form" onSubmit={submitSignup}>
            <div className="form-group">
                <label htmlFor="exampleInputname1">Name</label>
                <input type="name" className="form-control" id="exampleInputname1" aria-describedby="nameHelp" placeholder="Enter name" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
};


const Signup = () => {
    return (
        <SignupForm />
    )
};

export default Signup;