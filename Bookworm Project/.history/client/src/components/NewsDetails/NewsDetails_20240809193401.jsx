import { useEffect, useState } from 'react';
import styles from './NewsDetails.module.css';
import { Link, useParams } from 'react-router-dom';
import { getOneNews } from '../../services/newsService';


export default function NewsDetails() {
    const { newsId } = useParams();
    const [singleNews, setSingleNews] = useState({});

    useEffect(() => {
        getOneNews(newsId)
            .then(setSingleNews)
    }, [newsId]);

    return (
        <article className={styles["news-details"]}>
            <form className={styles["news-form"]}>
                <h1 className={styles["news-heading"]}>{singleNews.heading}</h1>
                <p className={styles["news-content"]}>{singleNews.content}</p>
                <Link to={"/"}><button className={styles["back-btn"]}>Back</button></Link>
            </form>
        </article>
    )
}