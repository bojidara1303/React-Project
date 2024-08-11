import styles from './Register.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import useForm from '../../hooks/useForm';
import AuthenticationContext from '../../contexts/authenticationContext';

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthenticationContext);
    const { values, onChangeHandler, onSubmitHandler } = useForm(registerSubmitHandler, {
        username: "",
        email: "",
        password: "",
        "confirm-password": ""
    });

    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const usernameValidator = () => {
        if (values.username === '') {
            setUsernameError('Username is required!')
        }
    }

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

    return (
        <div className={styles["register-page-container"]}>
            <section className="register-page">
                <form className={styles["register"]} onSubmit={onSubmitHandler}>
                    <div className={styles["register-left"]}>
                        <img src="/images/register-page.jpg" />
                    </div>
                    <div className={styles["register-right"]}>
                        <h1>Register</h1>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            onChange={onChangeHandler}
                            value={values["username"]}
                            onBlur={usernameValidator}
                        />

                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            onChange={onChangeHandler}
                            value={values["email"]}
                            onBlur={emailValidator}
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={onChangeHandler}
                            value={values["password"]}
                            onBlur={passwordValidator}
                        />

                        <input
                            type="password"
                            name="confirm-password"
                            placeholder="Confirm your password"
                            onChange={onChangeHandler}
                            value={values["confirm-password"]}
                            onBlur={confirmPasswordValidator}
                        />
                        <p className={styles["to-login"]}>If you already have profile click <Link className={styles['to-login-text']} to="/login">here</Link>
                        </p>
                        <button className={styles["register-btn"]}>Register</button>
                    </div>
                </form>
            </section>
        </div>
    )
}