import { useEffect, useState } from 'react';
import styles from './NewsDetails.module.css';
import { useParams } from 'react-router-dom';



export default function NewsDetails() {
    const { newsId } = useParams();
    const [singleNews, setSingleNews] = useState()

    useEffect(() => {
        getOneBook(newsId)
            .then(setSingleNews);

    }, [newsId]);

    return (
        <section className={styles["edit-wrapper"]}>
            <article className={styles["edit-review"]}>
                <form className={styles["news-form"]}>

                    <h1 className={styles["news-heading"]}>{singleNews.heading}</h1>

                    <textarea
                        name="newsContent"
                        id="newsContent"
                        value={singleNews["content"]}
                    />
                </form>

            </article>
        </section>
    )
}