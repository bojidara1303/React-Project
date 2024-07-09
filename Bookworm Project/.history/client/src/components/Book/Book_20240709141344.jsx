import styles from './Book.module.css'

export default function Book({
    author,
    cover,
    title,
    _id
}) {
    return (
        <div className={styles["book-container"]}>
            <article className={styles["book"]}>
                <img src={cover} />
                <h1>{title}</h1>
                <h3>{author}</h3>
                <button className={styles["show-details"]}>Show details</button>
            </article>
        </div>
    )
}