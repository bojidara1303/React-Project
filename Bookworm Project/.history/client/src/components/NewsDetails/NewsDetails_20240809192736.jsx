import { useEffect, useState } from 'react';
import styles from './NewsDetails.module.css';
import { useParams } from 'react-router-dom';
import { getOneNews } from '../../services/newsService';



export default function NewsDetails() {
    const { newsId } = useParams();
    const [singleNews, setSingleNews] = useState({})

    useEffect(() => {
        getOneNews(newsId)
            .then(setSingleNews)
    }, [newsId]);

    return (
        // <section className="edit-news-wrapper">
            <article className={styles["news-details"]}>
                <form className={styles["news-form"]}>
                    <h1 className={styles["news-heading"]}>{singleNews.heading}</h1>
                    <p className={styles["news-content"]}>{singleNews.content}</p>
                    <button className={styles["back-btn"]}>Back</button>
                </form>
            </article>
        // </section>
    )
}