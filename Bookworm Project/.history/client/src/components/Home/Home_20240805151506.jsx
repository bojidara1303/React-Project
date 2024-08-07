import styles from './Home.module.css';

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {


    return (
        <>
            <div id={styles["carouselExampleSlidesOnly"]} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Link to={'https://galleries.bolognachildrensbookfair.com/'}><img src="/images/Carousel-1.jpg" className="d-block w-100" alt="..." /></Link>
                    </div>
                    <div className="carousel-item">
                        <Link to={'https://internationalpublishers.org/new-dehli-world-book-fair/'}><img src="/images/Carousel-2.jpg" className="d-block w-100" alt="..." /></Link>
                    </div>
                    <div className="carousel-item">
                        <Link to={'https://galleries.bolognachildrensbookfair.com/'}><img src="/images/Carousel-3.jpg" className="d-block w-100" alt="..." /></Link>
                    </div>
                    <div className="carousel-item">
                        <Link to={'https://pubat.or.th/bangkok-international-book-fair-2024/'}><img src="/images/Carousel-4.jpg" className="d-block w-100" alt="..." /></Link>
                    </div>
                </div>
            </div>

                <section className={styles["news"]}>
                    <article>
                        <h5 className={styles["news-title"]}>English-language books are filling Europe's bookstores.</h5>
                        <p className={styles["news-content"]}>Young people, especially, are choosing to read in English even if it is not their first language because
                            they want the covers, and the titles, to match what they see on TikTok and other social media.</p>
                        <button className={styles["read-more"]}><Link className={styles["read-more-link"]} to={'https://www.bookbrowse.com/news/detail/index.cfm/news_item_number/3219/news/englishlanguage-books-are-filling-europe%E2%80%99s-bookstores-mon-dieu'}> Read more</Link></button>
                    </article>

                    <article>
                        <h5 className={styles["news-title"]}>Bookish Oscar winners</h5>
                        <p className={styles["news-content"]}>At last night's Academy Awards ceremony, several movies based on books or with book connections took home Oscars. Shelf Awareness rounds up the major category bookish winners including Oppenheimer,
                            based on the biography American Prometheus by Kai Bird & Martin J. ...</p>
                        <button className={styles["read-more"]}><Link className={styles["read-more-link"]} to={'https://www.bookbrowse.com/news/detail/index.cfm/news_item_number/3173/news/bookish-oscar-winners'}> Read more</Link></button>
                    </article>

                    <article>
                        <h5 className={styles["news-title"]}>2024 National Book Critics Circle Awards Finalists Announced</h5>
                        <p className={styles["news-content"]}>The National Book Critics Circle has announced 30 finalists in six categories—autobiography, biography, criticism, fiction, general nonfiction, and poetry—for the 2024
                            National Book Critics Circle Awards, which recognizes books from the publishing year 2023.</p>
                        <button className={styles["read-more"]}><Link className={styles["read-more-link"]} to={'https://www.bookbrowse.com/news/detail/index.cfm/news_item_number/3158/news/2024-national-book-critics-circle-awards-finalists-announced'}> Read more</Link></button>
                    </article>
                </section>
        </>

    )
}