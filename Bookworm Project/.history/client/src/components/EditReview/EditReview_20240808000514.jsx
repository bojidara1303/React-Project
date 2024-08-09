import styles from './EditReview.module.css';

import { useEffect, useState } from "react";
import { editReview, getOneReview } from "../../services/reviewService";
import { useNavigate, useParams } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';


export default function EditReview() {
    const navigate = useNavigate();
    const { reviewId, bookId } = useParams();
    const [review, setReview] = useState({
    });
    const [searchParams, setSearchParams] = useSearchParams();

    const myParam = searchParams.get('myParam');

    useEffect(() => {
        getOneReview(reviewId)
            .then(result => {
                setReview(result)
            })
    }, [reviewId]);

    const editReviewSubmitHandler = async (e) => {
        e.preventDefault()

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            console.log(myParam);
            await editReview(reviewId, values);
            navigate(`/books/${bookId}`)
        } catch (error) {
            console.log(error);
        }
    }

    const onChangeHandler = (e) => {
        setReview(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <section className={styles["edit-wrapper"]}>
            <article className={styles["edit-review"]}>
                <form className={styles["edit-review-form"]} onSubmit={editReviewSubmitHandler}>

                    <h1 className={styles["edit-review-heading"]}>Edit review</h1>

                    <textarea
                        name="review"
                        id="review"
                        value={review["review"]}
                        onChange={onChangeHandler}
                        placeholder="Enter your review"
                    />

                    <button className={styles["edit-review-btn"]}>Edit your review</button>
                </form>

            </article>
        </section>

    )
}