import styles from './Error.module.css';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <section className={styles["error-page"]}>
            <div className={styles["error-left"]}>
                <img src="/images/404-Page.png" alt="404" />
            </div>
            <div className={styles["error-right"]}>
                <h1 className={styles["error-title"]}>404</h1>
                <p className={styles["error-par"]}>Oops! Page not found.</p>
                <button className={styles["back-home"]}> <Link className={styles["go-to-home"]} to="/"> Go to home</Link></button>
            </div>
        </section>

    )
}