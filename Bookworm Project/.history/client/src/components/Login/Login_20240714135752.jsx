import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import useForm from '../../hooks/useForm';


export default function Login() {
    const { values, onChange, onSubmit } = useForm();

    return (
        <div className={styles["login-page-container"]}>
            <section className="login-page">
                <form className={styles["login"]} onSubmit={onSubmit}>
                    <div className={styles["login-left"]}>
                        <h1>Login</h1>
                        <input type="text" placeholder="Enter your email" />
                        <input type="password" placeholder="Enter your password" />
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