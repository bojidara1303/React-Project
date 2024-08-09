

export default function EditReview() {
    return (
        < section className={styles["all-reviews"]} >

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

            </article>
        </section>

    )
}