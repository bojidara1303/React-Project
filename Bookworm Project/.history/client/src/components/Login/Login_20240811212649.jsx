import styles from './Login.module.css';

import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';

import useForm from '../../hooks/useForm';
import AuthenticationContext from '../../contexts/authenticationContext';

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthenticationContext);
    const { values, onChangeHandler, onSubmitHandler } = useForm(loginSubmitHandler, {
        email: '',
        password: ''
    });

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const emailValidator = () => {
        if (values.email === '') {
            setEmailError('Email is required!')
        } else if (!new RegExp(/\S+@\S+\.\S+/).test(values.email)) {
            setEmailError('Incorrect email format!')
        } else {
            setEmailError('')
        }
    }

    const passwordValidator = () => {
        if (values.password === '') {
            setPasswordError('Password is required!')
        } else if (values.password.length < 6) {
            setPasswordError('Password must have a minimum 6 characters')
        } else {
            setPasswordError('')
        }
    }

    emailValidator(values.email);
    passwordValidator(values.password);

    return (
        <div className={styles["login-page-container"]}>
            <section className="login-page">
                <form className={styles["login"]} onSubmit={onSubmitHandler}>
                    <div className={styles["login-left"]}>
                        <h1>Login</h1>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            onChange={onChangeHandler}
                            value={values["email"]}
                            onBlur={emailValidator}
                        />
                        {emailError && (
                            <p className={styles["email-error"]}>{emailError}</p>
                        )}


                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={onChangeHandler}
                            value={values["password"]}
                            onBlur={passwordValidator}
                        />
                        {passwordError && (
                            <p className={styles["password-error"]}>{passwordError}</p>
                        )}


                        <p className={styles["to-register"]}>If you don't have profile click <Link className={styles['to-register-text']} to="/register">here</Link>
                        </p>
                        <button className={styles["login-btn"]}>Login</button>
                    </div>
                    <div className={styles["login-right"]}>
                        <img src="/images/login-page.jpg" />
                    </div>
                </form>
            </section>
        </div>
    );
}