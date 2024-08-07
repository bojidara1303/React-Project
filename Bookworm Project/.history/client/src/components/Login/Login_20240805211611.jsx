import styles from './Login.module.css';

import { Link } from 'react-router-dom';
import { useContext } from 'react';

import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authenticationContext';

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        email: '',
        password: ''
    });

    async function validator() {
        console.log('yaay');
        // onSubmit()
    }
    
    return (
        <div className={styles["login-page-container"]}>
            <section className="login-page">
                <form className={styles["login"]} >
                    <div className={styles["login-left"]}>
                        <h1>Login</h1>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            onChange={onChange}
                            value={values["email"]}
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={onChange}
                            value={values["password"]}
                        />

                        <p className={styles["to-register"]}>If you don't have profile click <Link className={styles['to-register-text']} to="/register">here</Link>
                        </p>
                        <button className={styles["login-btn"]} onClick={validator}>Login</button>
                    </div>
                    <div className={styles["login-right"]}>
                        <img src="/images/1.jpg" alt="1" />
                    </div>
                </form>
            </section>
        </div>
    );
}