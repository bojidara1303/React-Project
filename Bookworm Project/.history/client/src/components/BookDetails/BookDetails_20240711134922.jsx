import { useParams } from 'react-router-dom';
import styles from './BookDetails.module.css';
import { useEffect, useState } from 'react';
import { getOneBook } from '../../services/bookService';

export default function BookDetails() {
    const [book, setBook] = useState({})
    const { id } = useParams();

    useEffect(() => {
        getOneBook(id)
            .then(setBook);
    }, [id])

    return (
        <div className={styles["book-details-container"]}>
            <section className={styles["book-details"]}>
                <div className={styles["book-img"]}>
                    <img src={book.cover} alt={book.title} />
                </div>
                <div className={styles["book-info"]}>
                    <p className={styles["book-title"]}> {book.title}</p>
                    <p className="book-author"><span>Author:</span> {book.author} </p>
                    <p className="book-genre"><span>Genre:</span> {book.genre} </p>
                    <p className="book-year"><span>Year:</span> {book.year} </p>
                    <p className="book-pages"><span>Pages:</span> {book.pages} </p>
                    <p className="book-publisher"><span>Publisher:</span> {book.publisher} </p>
                    <p className="book-summary"><span>Summary:</span> {book.summary} </p>
                    {/* <div className={styles["btn-container"]}>
                        <button className={styles["edit-book"]}>Edit book</button>
                        <button className={styles["del-book"]}>Delete book</button>
                    </div> */}
                </div>
            </section >
        </div >
    )
}