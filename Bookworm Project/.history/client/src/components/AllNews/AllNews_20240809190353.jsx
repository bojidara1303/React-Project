import styles from './AllNews.module.css';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAllNews } from '../../services/newsService';


export default function AllNews() {
    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        getAllNews()
            .then(result => setAllNews(result))
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <section className={styles["news-container"]}>

            {allNews.map(singleNews => (
                <article key={singleNews._id}>
                    <h5 className={styles["news-heading"]}>{singleNews.heading}</h5>
                    <p className={styles["news-content"]}>{singleNews.newsContent}</p>
                    <button className={styles["read-more"]}><Link className={styles["read-more-link"]} to={`/news/${singleNews._id}`}> Read more</Link></button>
                </article>
            ))};

        </section>
    )
}