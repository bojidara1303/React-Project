import styles from './AllQuotes.module.css';

import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAllQuotes, deleteQuote } from '../../services/quoteService';
import { hasLoggedUser } from '../../utils/hasUser';
import AuthenticationContext from '../../contexts/authenticationContext';


export default function AllQuotes() {
    const [quotes, setQuotes] = useState([]);
    const { userId } = useContext(AuthenticationContext);

    // useEffect(() => {
    //     getAllQuotes()
    //         .then(result => setQuotes(result))
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }, []);

    const onDeleteQuoteHandler = async (quote) => {
        const isConfirmed = confirm("Are you sure you want to delete this quote?")
        if (isConfirmed) {
            await deleteQuote(quote._id);
            setQuotes(quotes => quotes.filter((el) => el._id !== quote._id));
        }
    }

    return (
        <>
            <div className={styles["quotes-container"]}>
                <section className={styles["all-quotes"]}>

                    {quotes.map(quote => (
                        <article className={styles["single-quote"]} key={quote._id}>
                            <div className={styles["left-side"]}>
                                <img src={quote.imageUrl} alt="imageUrl" />
                            </div>
                            <div className={styles["right-side"]}>
                                <p className={styles["quote-text"]}>{quote.quote}</p>
                                <div className={styles["name-container"]}>
                                    <p className={styles["quote-author"]}>{quote.author}</p>

                                    {userId === quote._ownerId &&
                                        <div className={styles["btn-container"]}>
                                            <Link to={`/quotes/${quote._id}/edit`}> <p className={styles["edit-icon"]}><i className="fa-solid fa-pen-to-square"></i></p></Link>
                                            <p className={styles["trash-icon"]}><i className="fa-solid fa-trash" onClick={() => onDeleteQuoteHandler(quote)}></i></p>
                                        </div>
                                    }
                                </div>
                            </div>
                        </article>
                    ))}

                    {quotes.length === 0 && <h1 className={styles["no-quotes"]}>No quotes added yet</h1>}

                </section>
                {hasLoggedUser() && (
                    <button className={styles["add"]}><Link className={styles["add-link"]} to={'add-quote'}> Add new quote</Link></button>
                )}
            </div>
        </>
    )
}