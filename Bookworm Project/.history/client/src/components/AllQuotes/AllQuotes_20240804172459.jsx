// import Quote from '../Quote/Quote';
import styles from './AllQuotes.module.css';
import { getAllQuotes } from '../../services/quoteService';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { hasLoggedUser } from '../../utils/hasUser';

export default function AllQuotes() {
    const [quotes, setQuotes] = useState([]);
    
    const { userId } = useContext(AuthContext);

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

                    {/* {quotes.map(quote => (
                        <Quote key={quote._id} {...quote} />
                    ))} */}

                    {quotes.map(quote => (
                         <article className={styles["single-quote"]}>
                         <div className={styles["left-side"]}>
                             <img src={quote.imageUrl} alt="imageUrl" />
                         </div>
                         <div className={styles["right-side"]}>
                             <p className={styles["quote-text"]}>{quote.quote}</p>
                             <div className={styles["name-container"]}>
                                 <p className={styles["quote-author"]}>{quote.author}</p>
             
                                 {isOwner &&
                                     <p className={styles["trash-icon"]}><i className="fa-solid fa-trash" onClick={onDeleteQuoteHandler}></i></p>
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