import { useEffect, useState } from "react";
import { getOneReview } from "../../services/reviewService";
import { useParams } from "react-router-dom";


export default function EditReview() {
    const { reviewId } = useParams();
    const [review, setReview] = useState({
        "review-content": "",
    });


    useEffect(() => {
        getOneReview(reviewId)
            .then(result => {
                setReview(result)
            })
    }, [reviewId]);

    const onChangeHandler = (e) => {
        setReview(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <article className={styles["edit-review"]}>
            <form className={styles["edit-review-form"]} onSubmit={onSubmitHandler}>

                <h1 className={styles["write-review-heading"]}>Edit review</h1>
                <textarea
                    name="review-content"
                    id="review-content"
                    value={review["review-content"]}
                    onChange={onChangeHandler}
                    placeholder="Enter your review"
                />

                <button className={styles["add-review"]}>Add your review</button>
            </form>

        </article>


    )
}