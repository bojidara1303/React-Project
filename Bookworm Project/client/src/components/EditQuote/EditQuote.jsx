import styles from './EditQuote.module.css';

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editQuote, getOneQuote } from '../../services/quoteService';


export default function EditQuote() {
    const navigate = useNavigate();
    const { quoteId } = useParams();
    const [quote, setQuote] = useState({
        imageUrl: "",
        quote: "",
        author: ""
    });

    useEffect(() => {
        getOneQuote(quoteId)
            .then(result => {
                setQuote(result)
            })
    }, [quoteId])

    const editQuoteSubmitHandler = async (e) => {
        e.preventDefault()

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await editQuote(quoteId, values);
            navigate('/quotes')
        } catch (error) {
            console.log(error);
        }
    }

    const onChangeHandler = (e) => {
        setQuote(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <div className={styles["edit-quote-container"]}>
            <section className={styles["edit-quote"]}>
                <form className={styles["edit"]} onSubmit={editQuoteSubmitHandler}>

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