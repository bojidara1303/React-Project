import { useContext } from 'react';
import styles from './Quote.module.css';
import AuthContext from '../../contexts/authenticationContext';
import { deleteQuote } from '../../services/quoteService';
import { useNavigate, useParams } from 'react-router-dom';


export default function Quote({
    imageUrl,
    quote,
    author,
    _ownerId
}) {
    const { userId } = useContext(AuthContext);
    const { quoteId } = useParams();
    const navigate = useNavigate();

    const onDeleteQuoteHandler = async () => {
        const isConfirmed = confirm("Are you sure you want to delete this quote?")

        if (isConfirmed) {
            await deleteQuote(quoteId)

            navigate('/quotes')
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
                        // <button className={styles["del-quote"]} onClick={onDeleteQuoteHandler}>Delete</button>
                        <p className={styles["trash-icon"]}><i className={styles["fa-solid fa-trash"]} onClick={onDeleteQuoteHandler}></i></p>
                    }
                </div>
            </div>
        </article>
    )
}