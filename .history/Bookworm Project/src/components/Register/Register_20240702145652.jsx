import { Link } from 'react-router-dom'
import styles from './Register.module.css'

export default function Register() {
    return (
        <section className="register-page">
            <form className={styles["register"]}>
                <div className={styles["register-left"]}>
                    <img src="./public/images/2.jpg" alt="2" />
                </div>
                <div className={styles["register-right"]}>
                    <h1>Register</h1>
                    <input type="text" placeholder="Enter your email" />
                    <input type="password" placeholder="Enter your password" />
                    <input type="password" placeholder="Confirm your password" />
                    <p className={styles["to-login"]}>If you already have profile click <Link style={{color:'rgb(40, 180, 114)'}} to="/login">here</Link>
                    </p>
                    <button className={styles["register-btn"]}>Register</button>
                </div>
            </form>
        </section>
    )
}