import styles from './AllReviews.module.css';

import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getAllReviews, createReview } from '../../services/reviewService';
import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authenticationContext';
import { hasLoggedUser } from '../../utils/hasUser';

export default function AllReviews() {
    const { username } = useContext(AuthContext)
    const [reviews, setReviews] = useState([]);
    const { bookId } = useParams();

    useEffect(() => {
        getAllReviews(bookId)
            .then(setReviews)
    }, [bookId]);

    const addReviewHandler = async (values) => {

        const newReview = await createReview(
            bookId,
            username,
            values["review-content"]
        );
        setReviews(state => [...state, { ...newReview, owner: { username } }]);
        values["review-content"] = ""
    };

    // const { values, onChange, onSubmit } = useForm(addReviewHandler, {
    //     'review-content': ''
    // });

    return (
        < section className={styles["all-reviews"]} >
            {hasLoggedUser() && (
                <>
                    <h1 className={styles["write-review-heading"]}>Write a review</h1>

                    <article className={styles["write-review"]}>
                        <form className={styles["review-form"]} onSubmit={addReviewHandler}>

                            <textarea
                                name="review-content"
                                id="review-content"
                                value={values["review-content"]}
                                onChange={onChange}
                                placeholder="Enter your review"
                            />

                            <button className={styles["add-review"]}>Add your review</button>
                        </form>
                        <div className={styles["reviews-separator"]}></div>
                    </article>
                </>
            )};


            <div className={styles["reviews-container"]}>
                <h1 className={styles["review-list-heading"]}>All reviews</h1>

                {reviews.map(({ _id, review, owner: { username } }) => (
                    <article key={_id} className={styles["review"]}>
                        <p className={styles["review-author"]}>{username}</p>
                        <p className={styles["review-content"]}>{review}</p>
                    </article>
                ))}

                {reviews.length === 0 && <h1 className={styles["no-reviews"]}>No reviews added yet</h1>}

            </div>
        </section >
    )
}