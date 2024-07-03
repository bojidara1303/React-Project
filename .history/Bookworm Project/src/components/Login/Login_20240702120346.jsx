import { Link } from 'react-router-dom';
import styles from './Login.module.css';

export default function Login() {
    return (
        <section className="login-page">
            <form className={styles["login"]}>
                <div className={styles["login-left"]}>
                    <h1>Login</h1>
                    <input type="text" placeholder="Enter your email" />
                    <input type="password" placeholder="Enter your password" />
                    <p className={styles["to-register"]}>If you don't have profile click <Link to="/register">here</Link>
                    </p>
                    <button className={styles["login-btn"]}>Login</button>
                </div>
                <div className={styles["login-right"]}>
                    <img src="./public/images/1.jpg" alt="1" />
                </div>
            </form>
        </section>
    );
}