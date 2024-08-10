import styles from './AddQuote.module.css';
import { useNavigate } from 'react-router-dom';

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

                    <button className={styles["add-quote-btn"]}>Add quote</button>
                </form>
            </section>
        </div>
    )
}