import { useState } from "react";

const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');
const [confirmPasswordError, setConfirmPasswordError] = useState('');
const [usernameError, setUsernameError] = useState('');

const { values } = useForm({
    email: '',
    password: ''
});

export const emailValidator = () => {
    if (email === '') {
        setEmailError('Email is required!')
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(values.email)) {
        setEmailError('Incorrect email format!')
    } else {
        setEmailError('')
    }
};


export const passwordValidator = () => {
    if (password === '') {
        setPasswordError('Password is required!')
    } else if (password.length < 6) {
        setPasswordError('Password must have a minimum 6 characters')
    } else {
        setPasswordError('')
    }
};

export const usernameValidator = () => {
    if (username === '') {
        setUsernameError('Username is required!')
    } else {
        setUsernameError('')
    }
};

export const confirmPasswordValidator = () => {
    if ("confirm-password" !== password) {
        setConfirmPasswordError('Passwords do not match!')
    } else {
        setConfirmPasswordError('')
    }
};



