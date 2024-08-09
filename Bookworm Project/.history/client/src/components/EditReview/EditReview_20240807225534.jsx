

export default function EditReview() {
    return (



        <article className={styles["edit-review"]}>
            <form className={styles["edit-review-form"]} onSubmit={onSubmitHandler}>

                <h1 className={styles["write-review-heading"]}>Edit review</h1>
                <textarea
                    name="review-content"
                    id="review-content"
                    value={values["review-content"]}
                    onChange={onChangeHandler}
                    placeholder="Enter your review"
                />

                <button className={styles["add-review"]}>Add your review</button>
            </form>

        </article>


    )
}