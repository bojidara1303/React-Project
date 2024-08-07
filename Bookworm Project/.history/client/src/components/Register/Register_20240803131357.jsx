import { Link } from 'react-router-dom'
import styles from './Register.module.css'
import { useContext } from 'react'
import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authenticationContext';


export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        username: '',
        email: '',
        password: '',
        "confirm-password": ''
    })

    return (
        <div className={styles["register-page-container"]}>
            <section className="register-page">
                <form className={styles["register"]} onSubmit={onSubmit}>
                    <div className={styles["register-left"]}>
                        <img src="/images/2.jpg" alt="2" />
                    </div>
                    <div className={styles["register-right"]}>
                        <h1>Register</h1>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            onChange={onChange}
                            value={values["username"]}
                        />

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

                        <input
                            type="password"
                            name="confirm-password"
                            placeholder="Confirm your password"
                            onChange={onChange}
                            value={values["confirm-password"]}
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