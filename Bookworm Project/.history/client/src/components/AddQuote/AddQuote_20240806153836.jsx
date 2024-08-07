import styles from './AddQuote.module.css';
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';

import {createQuote} from '../../services/quoteService';

export default function AddQuote() {
    const navigate = useNavigate();

    const { values, onChange, onSubmit } = useForm(addQuoteSubmitHandler,{
        quote: '',
        author: ''
    })

    const addQuoteSubmitHandler = async (values) => {
        try {
            await createQuote(values);
            navigate('/quotes')
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={styles["add-quote-container"]}>
            <section className={styles["add-quote"]}>
                <form className={styles["add"]} onSubmit={onSubmit}>

                    <h1>Add Quote</h1>

                    <label htmlFor="imageUrl">Image:</label>
                    <input type="url" id="imageUrl" name="imageUrl" placeholder="Enter image URL" />

                    <label htmlFor="quote">Quote:</label>
                    <textarea
                        name="quote"
                        id="quote"
                        // onChange={onChange}
                        // value={values["quote"]}
                        placeholder="Enter quote here"
                    />

                    <label htmlFor="author">Name:</label>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        // onChange={onChange}
                        // value={values["author"]}
                        placeholder="Enter name here"
                    />

                    <button className={styles["add-quote-btn"]} type="submit">Add quote</button>
                </form>
            </section>
        </div>
    )
}