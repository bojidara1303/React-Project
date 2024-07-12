import styles from './AllReviews.module.css';
import { createReview } from '../../services/reviewService';
import { useParams } from 'react-router-dom';

export default function AllReviews() {
    const { id } = useParams();

    const addReviewHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        createReview(
            id,
            formData.get('username'),
            formData.get('review'))
    }

    return (

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
    )
}