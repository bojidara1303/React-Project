import Quote from '../Quote/Quote';
import styles from './AllQuotes.module.css';
import { getAllQuotes } from '../../services/quoteService';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function AllQuotes() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        getAllQuotes()
            .then(result => setQuotes(result))
            .catch(err => {
                console.log(err);
            })
    }, []);


    return (
        <>
            <div className={styles["quotes-container"]}>
                <section className={styles["all-quotes"]}>

                    {quotes.map(quote => (
                        <Quote key={quote._id} {...quote} />
                    ))}

                    {quotes.length === 0 && <h1 className={styles["no-quotes"]}>No quotes added yet</h1>}

                </section>
                <button className={styles["add"]}><Link className={styles["add-link"]} to={'add-quote'}> Add new quote</Link></button>
            </div>
        </>
    )
}