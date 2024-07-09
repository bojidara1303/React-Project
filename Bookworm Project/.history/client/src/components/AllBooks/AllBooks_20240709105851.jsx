import Book from '../Book/Book'
import styles from './AllBooks.module.css'

export default function AllBooks() {
    return (
        <section className={styles["book-catalog"]}>
            <h1 className={styles["book-catalog-heading"]}>All Books</h1>

            <Book />
        </section>
    )
}