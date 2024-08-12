import styles from './BookDetails.module.css';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { getOneBook, deleteBook } from '../../services/bookService';
import AllReviews from '../AllReviews/AllReviews';
import AuthenticationContext from '../../contexts/authenticationContext';


export default function BookDetails() {
    const { userId } = useContext(AuthenticationContext);
    const [book, setBook] = useState({});
    const { bookId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getOneBook(bookId)
            .then(setBook)
    }, [bookId]);

    const onDeleteBookClickHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete ${book.title}?`)

        if (isConfirmed) {
            await deleteBook(bookId)
            navigate('/books')
        }

    }

    const isOwner = userId === book._ownerId;

    return (
        <>
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

                        {isOwner && (
                            <div className={styles["btn-container"]}>
                                <Link to={`/books/${bookId}/edit`}> <button className={styles["edit-book"]}>Edit book</button></Link>
                                <button className={styles["del-book"]} onClick={onDeleteBookClickHandler}>Delete book</button>
                            </div>
                        )}
                    </div>
                </section >
            </div >

            {/* Reviews section */}

            <AllReviews />
        </>
    )
}