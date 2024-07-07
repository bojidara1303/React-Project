import styles from './Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {


    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/images/bologna.jpg" className="d-block w-100" alt="..." height={50%}/>
                </div>
                <div className="carousel-item">
                    <img src="/images/bangkok.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="/images/bologna2.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
        </div>

    )
}