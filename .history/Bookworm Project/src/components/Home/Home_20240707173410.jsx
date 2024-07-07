import styles from './Home.jsx'


export default function Home() {
    let slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }


    return (
        <div>

            <div className={styles["slideshow-container"]}>


                <div className={styles["mySlides fade"]}>
                    <div className={styles["numbertext"]}>1 / 3</div>
                    <img src="./public/images/bologna.jpg" style="width:100%" />
                    <div className={styles["text"]}>Caption Text</div>
                </div>

                <div className={styles["mySlides fade"]}>
                    <div className={styles["numbertext"]}>2 / 3</div>
                    <img src="./public/images/bangkok.png" style="width:100%" />
                    <div className={styles["text"]}>Caption Two</div>
                </div>

                <div className={styles["mySlides fade"]}>
                    <div className={styles["numbertext"]}>3 / 3</div>
                    <img src="./public/images/bologna2.jpg" style="width:100%" />
                    <div className={styles["text"]}>Caption Three</div>
                </div>


                <a className={styles["prev"]} onclick="plusSlides(-1)">&#10094;</a>
                <a className={styles["next"]} onclick="plusSlides(1)">&#10095;</a>
            </div>
            <br />


            <div style="text-align:center">
                <span className={styles["dot"]} onclick="currentSlide(1)"></span>
                <span className={styles["dot"]} onclick="currentSlide(2)"></span>
                <span className={styles["dot"]} onclick="currentSlide(3)"></span>
            </div>
        </div>

    )
}