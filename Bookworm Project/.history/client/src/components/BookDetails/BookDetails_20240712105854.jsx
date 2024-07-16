import { useParams } from 'react-router-dom';
import styles from './BookDetails.module.css';
import { useEffect, useState } from 'react';
import { createReview, getAllReviews } from '../../services/reviewService';
import { getOneBook } from '../../services/bookService';
import Review from '../Review/Review';


export default function BookDetails() {
    const [book, setBook] = useState({});
    const [reviews, setReviews] = useState([]);
    const { bookId } = useParams();

    useEffect(() => {
        getOneBook(bookId)
            .then(setBook);

        getAllReviews()
            .then(setReviews)
    }, [bookId]);


    const addReviewHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newReview = await createReview(
            bookId,
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

            {/* Reviews section */}

            <section className={styles["all-reviews"]}>
                <h1 className={styles["write-review-heading"]}>Write a review</h1>

                <article className={styles["write-review"]}>
                    <form className={styles["review-form"]} onSubmit={addReviewHandler}>
                        <input type="text" name="username" placeholder="Enter username" />
                        <textarea name="review" id="review" placeholder="Enter your review"></textarea>
                        <button className={styles["add-review"]}>Add your review</button>
                    </form>
                </article>

                <div className={styles["reviews-container"]}>
                    <h1 className={styles["review-list-heading"]}>All reviews</h1>

                    {reviews.map(review => (
                        <Review key={review._id} {...review} />
                    ))}

                    {reviews.length === 0 && <h1 className={styles["no-reviews"]}>No reviews added yet</h1>}

                </div>
            </section>
        </>
    )
}