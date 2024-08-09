export default function NewsDetails(){
    return(
        <section className={styles["edit-wrapper"]}>
        <article className={styles["edit-review"]}>
            <form className={styles["news-form"]}>

                <h1 className={styles["news-heading"]}></h1>

                <textarea
                    name="newsContent"
                    id="newsContent"
                />
            </form>

        </article>
    </section>
    )
}