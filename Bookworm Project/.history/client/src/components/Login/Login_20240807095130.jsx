import styles from './Login.module.css';

import { Link } from 'react-router-dom';
import { useContext } from 'react';

import useForm from '../../hooks/useForm';
import AuthenticationContext from '../../contexts/authenticationContext';

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthenticationContext);
    const { values, onChangeHandler, onSubmitHandler } = useForm(loginSubmitHandler, {
        email: "",
        password: ""
    });


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
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={onChangeHandler}
                            value={values["password"]}
                        />

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