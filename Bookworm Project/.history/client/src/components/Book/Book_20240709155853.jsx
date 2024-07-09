import styles from './Book.module.css';
import { Link } from 'react-router-dom'

export default function Book({
    author,
    cover,
    title,
    _id
}) {
    return (
        <article className={styles["book"]}>
            <img src={cover} />
            <h1>{title}</h1>
            <h3>{author}</h3>
            <button className={styles["show-details"]}>Show details</button>
        </article>
    )
}