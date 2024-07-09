import styles from './Book.module.css'

export default function CatalogBook() {
    return (
        <div className={styles["book-container"]}>
            <article className={styles["book"]}>
                <img src="./public/images/Green Mile.jpg" />
                <h1>Green Mile</h1>
                <h3>Stephen King</h3>
                <button className={styles["show-details"]}>Show details</button>
            </article>
        </div>
    )
}