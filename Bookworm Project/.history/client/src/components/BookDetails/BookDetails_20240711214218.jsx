import { useParams } from 'react-router-dom';
import styles from './BookDetails.module.css';
import { useEffect, useState } from 'react';
import { createReview } from '../../services/reviewService';
import { getOneBook } from '../../services/bookService';


export default function BookDetails() {
    const [book, setBook] = useState({})
    const { id } = useParams();

    useEffect(() => {
        getOneBook(id)
            .then(setBook);
    }, [id]);


    const addReviewHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newReview = await createReview(
            id,
            formData.get('username'),
            formData.get('review')
        );

        console.log(newReview);
    }

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
                        <div className={styles["btn-container"]}>
                            <button className={styles["edit-book"]}>Edit book</button>
                            <button className={styles["del-book"]}>Delete book</button>
                        </div>
                    </div>
                </section >
            </div >

            <section className={styles["all-reviews"]}>
            <h1 className={styles["review-list-heading"]}>Write a review</h1>

            <article className={styles["write-review"]}>
                <form className={styles["review-form"]} onSubmit={addReviewHandler}>
                    <input type="text" name="username" placeholder="Enter username" />
                    <textarea name="review" id="review" placeholder="Enter your review"></textarea>
                    <button className={styles["add-review"]}>Add your review</button>
                </form>
            </article>

            <div className={styles["reviews-container"]}>
                <h1 className={styles["review-list-heading"]}>All reviews</h1>

                <article className={styles["singe-review"]}>
                    <p className={styles["review-author"]}>username</p>
                    <p className={styles["review-content"]}>It tells the story of death row supervisor Paul
                        Edgecombe's encounter with John Coffey, an unusual inmate who displays inexplicable
                        healing and empathetic abilities. The book is an example of magical realism.</p>
                </article>

                <article className={styles["singe-review"]}>
                    <p className={styles["review-author"]}>username</p>
                    <p className={styles["review-content"]}>It tells the story of death row supervisor Paul
                        Edgecombe's encounter with John Coffey, an unusual inmate who displays inexplicable
                        healing and empathetic abilities. The book is an example of magical realism.</p>
                </article>

                <article className={styles["singe-review"]}>
                    <p className={styles["review-author"]}>username</p>
                    <p className={styles["review-content"]}>It tells the story of death row supervisor Paul
                        Edgecombe's encounter with John Coffey, an unusual inmate who displays inexplicable
                        healing and empathetic abilities. The book is an example of magical realism.</p>
                </article>

                <article className={styles["singe-review"]}>
                    <p className={styles["review-author"]}>username</p>
                    <p className={styles["review-content"]}>It tells the story of death row supervisor Paul
                        Edgecombe's encounter with John Coffey, an unusual inmate who displays inexplicable
                        healing and empathetic abilities. The book is an example of magical realism.</p>
                </article>
            </div>
        </section>
        </>
    )
}