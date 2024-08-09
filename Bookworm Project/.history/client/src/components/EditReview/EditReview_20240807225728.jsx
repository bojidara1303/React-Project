import { useState } from "react";


export default function EditReview() {
    const [review, setReview] = useState({
        "review-content": "",
    });

    const onChangeHandler = (e) => {
        setQuote(state => ({
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