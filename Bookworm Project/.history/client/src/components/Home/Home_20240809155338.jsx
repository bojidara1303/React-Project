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

                
        </>

    )
}