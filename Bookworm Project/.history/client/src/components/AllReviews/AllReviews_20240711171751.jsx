import styles from './AllReviews.module.css';

export default function AllReviews() {
    return (

        <section className={styles["all-reviews"]}>
       <h1 className={styles["review-list-heading"]}>Write a review</h1>

            <article className={styles["write-review"]}>
                <form className={styles["review-form"]}>
                    <textarea name="review" id="review" placeholder="Enter your review"></textarea>
                    <button className={styles["add-review"]}>Add your review</button>
                </form>
            </article>

            <div className={styles["reviews-container"]}>
            <h1 className={styles["all-reviews"]}>All reviews</h1>

                <article className={styles["singe-review"]}>
                    <p className={styles["review-author"]}>username</p>
                    <p className={styles["review-content"]}>It tells the story of death row supervisor Paul
                        Edgecombe's encounter with John Coffey, an unusual inmate who displays inexplicable
                        healing and empathetic abilities. The book is an example of magical realism.</p>
                </article>

                <article className={styles["review"]}>
                    <p className={styles["review-author"]}>username</p>
                    <p className={styles["review-content"]}>It tells the story of death row supervisor Paul
                        Edgecombe's encounter with John Coffey, an unusual inmate who displays inexplicable
                        healing and empathetic abilities. The book is an example of magical realism.</p>
                </article>

                <article className={styles["review"]}>
                    <p className={styles["review-author"]}>username</p>
                    <p className={styles["review-content"]}>It tells the story of death row supervisor Paul
                        Edgecombe's encounter with John Coffey, an unusual inmate who displays inexplicable
                        healing and empathetic abilities. The book is an example of magical realism.</p>
                </article>

                <article className={styles["review"]}>
                    <p className={styles["review-author"]}>username</p>
                    <p className={styles["review-content"]}>It tells the story of death row supervisor Paul
                        Edgecombe's encounter with John Coffey, an unusual inmate who displays inexplicable
                        healing and empathetic abilities. The book is an example of magical realism.</p>
                </article>
            </div>
        </section>
    )
}