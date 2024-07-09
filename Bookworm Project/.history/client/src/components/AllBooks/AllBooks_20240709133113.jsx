import { useEffect, useState } from 'react'
import Book from '../Book/Book'
import styles from './AllBooks.module.css';
import { getAllBooks } from '../../services/bookService';



export default function AllBooks() {
    useEffect(() => {
        getAllBooks()
            .then(result => setBooks(result))
    }, [])
    return (
        <section className={styles["book-catalog"]}>
            <h1 className={styles["book-catalog-heading"]}>All Books</h1>

            {/* <Book /> */}
        </section>
    )
}