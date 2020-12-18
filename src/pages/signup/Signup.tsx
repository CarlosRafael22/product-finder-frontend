import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../../redux/auth/actions';
import { RootState } from '../../redux/index';
import './Signup.css'
import Form, { initialValuesType } from '../../components/Form';
import InputField from '../../components/Form/InputField';

export const SignupForm = () => {
    const history = useHistory();

    const dispatch = useDispatch();
    const authUser = useSelector((state: RootState) => state.auth.user );

    const submitSignup = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(event.target);
        const userToCreate = {
            // name,
            // email,
            // password,
            // username: email,
            userId: 1,
            customerId: 1
        };
        console.log(userToCreate)
        dispatch(saveUser(userToCreate));
        // history.push('/products');
    };

    const onSubmitHandler = (values: initialValuesType) => {
        console.log('CHAMOU PAI')
        console.log(values)
    };

    return (
        <Form
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }}
            onSubmitHandler={onSubmitHandler}
        >
            <InputField
                type='text'
                name='firstName'
                placeholder='Enter first name'
                />
            <InputField
                type='text'
                name='lastName'
                placeholder='Enter last name'
                />
            <InputField
                type='email'
                name='email'
                placeholder='Enter email'
                />
            <InputField
                type='password'
                name='password'
                placeholder='Enter password'
                />
        </Form>
    )
};


const Signup = () => {
    return (
        <SignupForm />
    )
};

export default Signup;