import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import useForm from '../../hooks/useForm';
import { useContext } from 'react';
import AuthenticationContext from '../../contexts/authenticationContext';

const LoginFormKeys = {
    email: 'email',
    password: 'password'
}

export default function Login({
    loginSubmitHandler
}) {
    const {} = useContext(AuthenticationContext)
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.email]: '',
        [LoginFormKeys.password]: '',
    });

    return (
        <div className={styles["login-page-container"]}>
            <section className="login-page">
                <form className={styles["login"]} onSubmit={onSubmit}>
                    <div className={styles["login-left"]}>
                        <h1>Login</h1>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            name={LoginFormKeys.email}
                            onChange={onChange}
                            value={values[LoginFormKeys.email]} />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            name={LoginFormKeys.password}
                            onChange={onChange}
                            value={values[LoginFormKeys.password]} />
                        <p className={styles["to-register"]}>If you don't have profile click <Link style={{ color: 'rgb(40, 180, 114)' }} to="/register">here</Link>
                        </p>
                        <button className={styles["login-btn"]}>Login</button>
                    </div>
                    <div className={styles["login-right"]}>
                        <img src="/images/1.jpg" alt="1" />
                    </div>
                </form>
            </section>
        </div>
    );
}