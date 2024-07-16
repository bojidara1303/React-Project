import styles from './Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {


    return (
        // <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        //     <div className="carousel-inner">
        //         <div className="carousel-item active">
        //             <img src="/images/Carousel-1.jpg" className="d-block w-100" alt="..." />
        //         </div>
        //         <div className="carousel-item">
        //             <img src="/images/Carousel-2.jpg" className="d-block w-100" alt="..." />
        //         </div>
        //         <div className="carousel-item">
        //             <img src="/images/Carousel-3.jpg" className="d-block w-100" alt="..." />
        //         </div>
        //         <div className="carousel-item">
        //             <img src="/images/Carousel-4.jpg" className="d-block w-100" alt="..." />
        //         </div>
        //     </div>
        // </div>

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="..." alt="First slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Second slide" />
                </div>
                <div class="carousel-item">
                    <img src="/images/Carousel-3.jpg" className="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="/images/Carousel-4.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}