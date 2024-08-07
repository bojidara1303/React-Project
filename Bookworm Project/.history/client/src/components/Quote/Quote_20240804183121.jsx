import { useContext, useState, useEffect } from 'react';
import styles from './Quote.module.css';
import AuthContext from '../../contexts/authenticationContext';
import { deleteQuote } from '../../services/quoteService';
import { useNavigate } from 'react-router-dom';
import { getAllQuotes } from '../../services/quoteService';

export default function Quote({
    imageUrl,
    quote,
    author,
    _ownerId,
    _id
}) {
    const [quotes, setQuotes] = useState([])
    const { userId } = useContext(AuthContext);
    // const navigate = useNavigate();

    const onDeleteQuoteHandler = async () => {
        const isConfirmed = confirm("Are you sure you want to delete this quote?")

        if (isConfirmed) {
            await deleteQuote(_id);
            console.log(quotes);
            setQuotes(quotes => quotes.filter((el) => el._id !== quote._id)); // filter by id

        }
    }

    const isOwner = userId === _ownerId;

    return (
        <article className={styles["single-quote"]}>
            <div className={styles["left-side"]}>
                <img src={imageUrl} alt="imageUrl" />
            </div>
            <div className={styles["right-side"]}>
                <p className={styles["quote-text"]}>{quote}</p>
                <div className={styles["name-container"]}>
                    <p className={styles["quote-author"]}>{author}</p>

                    {isOwner &&
                        <p className={styles["trash-icon"]}><i className="fa-solid fa-trash" onClick={onDeleteQuoteHandler}></i></p>
                    }
                </div>
            </div>
        </article>
    )
}