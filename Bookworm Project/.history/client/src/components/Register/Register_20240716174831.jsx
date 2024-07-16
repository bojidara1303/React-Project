import { Link } from 'react-router-dom'
import { useContext } from 'react'

import styles from './Register.module.css'

import AuthenticationContext from '../../contexts/authenticationContext'

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthenticationContext)

    return (
        <div className={styles["register-page-container"]}>
            <section className="register-page">
                <form className={styles["register"]}>
                    <div className={styles["register-left"]}>
                        <img src="/images/2.jpg" alt="2" />
                    </div>
                    <div className={styles["register-right"]}>
                        <h1>Register</h1>
                        <input type="text" name="email" placeholder="Enter your email" />
                        <input type="password" name="password" placeholder="Enter your password" />
                        <input type="password" name="confirm-password" placeholder="Confirm your password" />
                        <p className={styles["to-login"]}>If you already have profile click <Link style={{ color: 'rgb(40, 180, 114)' }} to="/login">here</Link>
                        </p>
                        <button className={styles["register-btn"]}>Register</button>
                    </div>
                </form>
            </section>
        </div>
    )
}