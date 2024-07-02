import styles from './Error.module.css'

export default function Error() {
    return (
        <section className={styles["error-page"]}>
            <img src="./public/images/404 Page.png" alt="404" />
            <h1 className={styles["error-title"]}>404</h1>
            <p className={styles["error-par"]}>Oops! Page not found.</p>
            <button className={styles["back-home"]}>Go to home</button>
        </section>
    )
}