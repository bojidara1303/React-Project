import styles from './EditQuote.module.css';

import { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import {  useNavigate } from "react-router-dom";


export default function EditQuote() {
    const [quote, setQuote] = useState({
        imageUrl: "",
        quote: "",
        author: ""
    });

    const editQuoteSubmitHandler = async (e) => {
        e.preventDefault()

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await editBook(_id, values);
            navigate('/quotes')
        } catch (error) {
            console.log(error);
        }
    }

    const onChangeHandler = (e) => {
        setBook(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <div className={styles["edit-quote-container"]}>
            <section className={styles["edit-quote"]}>
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