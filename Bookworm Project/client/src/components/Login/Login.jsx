import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import { useForm } from '../../hooks/useForm';
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        email: '',
        password: ''
    })

    return (
        <div className={styles["login-page-container"]}>
            <section className="login-page">
                <form className={styles["login"]} onSubmit={onSubmit}>
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