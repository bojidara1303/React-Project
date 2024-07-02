import styles from './Error.module.css'

export default function Error() {
    return (
        <section className={styles["error-page"]}>
            <img src="./public/images/404 Page.png" alt="404" />
            <h1 className={style["error-title"]}>404</h1>
            <p className="error-par">Oops! Page not found.</p>
            <button className="back-home">Go to home</button>
        </section>
    )
}