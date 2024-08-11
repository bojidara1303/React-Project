import styles from './AddQuote.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import useForm from '../../hooks/useForm';
import { createQuote } from '../../services/quoteService';

export default function AddQuote() {
    const navigate = useNavigate();

    const addQuoteSubmitHandler = async (values) => {
        try {
            await createQuote(values);
            navigate('/quotes')
        } catch (err) {
            console.log(err);
        }
    };

    const { values, onChangeHandler, onSubmitHandler } = useForm(addQuoteSubmitHandler, {
        imageUrl: "",
        quote: "",
        author: ""
    });

    const [urlError, setUrlError] = useState('');
    const [quoteError, setQuoteError] = useState('');
    const [authorError, setAuthorError] = useState('');


    const urlValidator = () => {
        if (values.imageUrl === '') {
            setUrlError('Image URL is required!')
        } else {
            setUrlError('')
        }
    }

    const quoteValidator = () => {
        if (values.quote === '') {
            setQuoteError('Quote is required!')
        } else {
            setQuoteError('')
        }
    }

    const authorValidator = () => {
        if (values.author === '') {
            setAuthorError('Name is required!')
        } else {
            setAuthorError('')
        }
    }

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
                        onBlur={urlValidator}
                        placeholder="Enter image URL"
                    />
                    {urlError && (
                        <p className={styles["url-error"]}>{urlError}</p>
                    )}

                    <label htmlFor="quote">Quote:</label>
                    <textarea
                        name="quote"
                        id="quote"
                        onChange={onChangeHandler}
                        value={values["quote"]}
                        onBlur={quoteValidator}
                        placeholder="Enter quote here"
                    />
                    {quoteError && (
                        <p className={styles["quote-error"]}>{quoteError}</p>
                    )}

                    <label htmlFor="author">Name:</label>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        onChange={onChangeHandler}
                        value={values["author"]}
                        onBlur={authorValidator}
                        placeholder="Enter name here"
                    />
                    {authorError && (
                        <p className={styles["author-error"]}>{authorError}</p>
                    )}

                    <button className={styles["add-quote-btn"]}>Add quote</button>
                </form>
            </section>
        </div>
    )
}