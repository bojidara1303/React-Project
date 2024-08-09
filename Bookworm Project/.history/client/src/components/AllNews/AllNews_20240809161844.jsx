import styles from './AllNews.module.css';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAllNews } from '../../services/newsService';


export default function AllNews() {
    const [news, setNews] = useState();

    useEffect(() => {
        getAllNews()
            .then(result => setNews(result))
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <section className={styles["news-container"]}>

            {news.map(singleNews => (
                <article key={singleNews._id}>
                    <h5 className={styles["news-heading"]}>{singleNews.heading}</h5>
                    <p className={styles["news-content"]}>{singleNews.news}</p>
                    <button className={styles["read-more"]}><Link className={styles["read-more-link"]} to={'https://www.bookbrowse.com/news/detail/index.cfm/news_item_number/3219/news/englishlanguage-books-are-filling-europe%E2%80%99s-bookstores-mon-dieu'}> Read more</Link></button>
                </article>
            ))};

        </section>
    )
}