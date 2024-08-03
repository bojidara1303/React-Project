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
            <Link to={`/books/${_id}`}> <img src={cover} /></Link> 
            <h1>{title}</h1>
            <h3>{author}</h3>
            <button className={styles["show-details"]}><Link className={styles["show-details-link"]} to={`/books/${_id}`}>Show details</Link></button>
        </article>
    )
}