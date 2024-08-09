import styles from './AllNews.module.css';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function AllNews (){
    return(
        <section className={styles["news"]}>
                    <article>
                        <h5 className={styles["news-heading"]}>English-language books are filling Europe's bookstores.</h5>
                        <p className={styles["news-content"]}>Young people, especially, are choosing to read in English even if it is not their first language because
                            they want the covers, and the titles, to match what they see on TikTok and other social media.</p>
                        <button className={styles["read-more"]}><Link className={styles["read-more-link"]} to={'https://www.bookbrowse.com/news/detail/index.cfm/news_item_number/3219/news/englishlanguage-books-are-filling-europe%E2%80%99s-bookstores-mon-dieu'}> Read more</Link></button>
                    </article>
                </section>
    )
}