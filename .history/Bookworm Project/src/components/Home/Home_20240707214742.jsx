import styles from './Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {


    return (
        // <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        //     <div className="carousel-inner">
        //         <div className="carousel-item active">
        //             <img src="/images/bologna.jpg" className="d-block w-100" alt="..." />
        //         </div>
        //         <div className="carousel-item">
        //             <img src="/images/bangkok.png" className="d-block w-100" alt="..." />
        //         </div>
        //         <div className="carousel-item">
        //             <img src="/images/bologna2.jpg" className="d-block w-100" alt="..." />
        //         </div>
        //     </div>
        // </div>


        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="/images/bologna2.jpg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>
          {/* <img src="/images/bologna2.jpg" className="d-block w-100" alt="..." /> */}
        </div>
        <div className="carousel-item">
          <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg>
        </div>
        <div className="carousel-item">
          <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>
        </div>
      </div>
    </div>
    )
}