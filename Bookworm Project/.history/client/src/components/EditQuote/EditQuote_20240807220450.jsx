export default function EditQuote() {
    return (
        <div className={styles["add-quote-container"]}>
            <section className={styles["add-quote"]}>
                <form className={styles["add"]} onSubmit={onSubmitHandler}>

                    <h1>Add Quote</h1>

                    <label htmlFor="imageUrl">Image:</label>
                    <input
                        type="url"
                        id="imageUrl"
                        name="imageUrl"
                        onChange={onChangeHandler}
                        value={values["imageUrl"]}
                        placeholder="Enter image URL"
                    />

                    <label htmlFor="quote">Quote:</label>
                    <textarea
                        name="quote"
                        id="quote"
                        onChange={onChangeHandler}
                        value={values["quote"]}
                        placeholder="Enter quote here"
                    />

                    <label htmlFor="author">Name:</label>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        onChange={onChangeHandler}
                        value={values["author"]}
                        placeholder="Enter name here"
                    />

                    <button className={styles["add-quote-btn"]}>Edit quote</button>
                </form>
            </section>
        </div>
    )
}