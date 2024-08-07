import { useState } from "react"

export default function EditQuote() {
    const [quote, setQuote] = useState({
        imageUrl: "",
        quote: "",
        author: ""
    })


    return (
        <div className={styles["add-quote-container"]}>
            <section className={styles["add-quote"]}>
                <form className={styles["edit"]} onSubmit={onSubmitHandler}>

                    <h1>Edit Quote</h1>

                    <label htmlFor="imageUrl">Image:</label>
                    <input
                        type="url"
                        id="imageUrl"
                        name="imageUrl"
                        onChange={onChangeHandler}
                        value={quote["imageUrl"]}
                        placeholder="Enter image URL"
                    />

                    <label htmlFor="quote">Quote:</label>
                    <textarea
                        name="quote"
                        id="quote"
                        onChange={onChangeHandler}
                        value={quote["quote"]}
                        placeholder="Enter quote here"
                    />

                    <label htmlFor="author">Name:</label>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        onChange={onChangeHandler}
                        value={quote["author"]}
                        placeholder="Enter name here"
                    />

                    <button className={styles["edit-quote-btn"]}>Edit quote</button>
                </form>
            </section>
        </div>
    )
}