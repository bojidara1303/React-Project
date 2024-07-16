import styles from './Review.module.css'

export default function Review({
    _id,
    username,
    review
}) {
    return (

        <article className={styles["review"]}>
            <p className={styles["review-author"]}>{username}</p>
            <p className={styles["review-content"]}>{review}</p>
        </article>
    )
}