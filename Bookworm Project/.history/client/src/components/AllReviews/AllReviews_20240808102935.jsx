import styles from './AllReviews.module.css';

import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getAllReviews, createReview, deleteReview } from '../../services/reviewService';
import useForm from '../../hooks/useForm';
import AuthenticationContext from '../../contexts/authenticationContext';
import { hasLoggedUser } from '../../utils/hasUser';

export default function AllReviews() {
    const { username, userId } = useContext(AuthenticationContext)
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
        values["review-content"] = "";
    };

    const { values, onChangeHandler, onSubmitHandler } = useForm(addReviewHandler, {});

    const onDeleteReviewHandler = async (_id) => {
        const isConfirmed = confirm("Are you sure you want to delete this review?")
        if (isConfirmed) {
            await deleteReview(_id);
            setReviews(reviews => reviews.filter((el) => el._id !== _id));
        }
    }

    return (
        < section className={styles["all-reviews"]} >
            {hasLoggedUser() && (
                <>
                    <h1 className={styles["write-review-heading"]}>Write a review</h1>

                    <article className={styles["write-review"]}>
                        <form className={styles["review-form"]} onSubmit={onSubmitHandler}>

                            <textarea
                                name="review-content"
                                id="review-content"
                                value={values["review-content"]}
                                onChange={onChangeHandler}
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

                {reviews.map(({ _id, review, _ownerId, owner: { username } }) => (
                    <article key={_id} className={styles["review"]}>


                        <div className={styles["container"]}>
                            <p className={styles["review-author"]}>{username}</p>
                            {userId === _ownerId &&
                                <div className={styles["btn-container"]}>
                                    <p className={styles["trash-icon"]}><i className="fa-solid fa-trash" onClick={() => onDeleteReviewHandler(_id)}></i></p>
                                </div>
                            }
                        </div>
                        <p className={styles["review-content"]}>{review}</p>
                    </article>
                ))}

                {reviews.length === 0 && <h1 className={styles["no-reviews"]}>No reviews added yet</h1>}

            </div>
        </section >
    )
}