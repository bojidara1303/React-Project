import { useEffect, useState } from 'react'
import Book from '../Book/Book'
import styles from './AllBooks.module.css';
import { getAllBooks } from '../../services/bookService';



export default function AllBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getAllBooks()
            .then(result => setBooks(result))
    }, [])

    return (
        <section className={styles["book-catalog"]}>
            <h1 className={styles["book-catalog-heading"]}>All Books</h1>

            <div className={styles["book-container"]}>

                {/* {books.map(book => (
                    <Book key={book._id} {...book} />
                ))} */}

                {books.length === 0 && <h1 className={styles["no-books"]}>No books added yet</h1>}
            </div>
        </section>
    )
}