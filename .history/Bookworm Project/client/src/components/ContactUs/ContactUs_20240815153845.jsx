import styles from './ContactUs.module.css';

export default function ContactUs() {
    return (
        <section className={styles["contact-us"]}>
            <h1 className={styles["contact-us-heading"]}>Contact Us</h1>
            <div className={styles["contact-us-container"]}>
                <div className="contact-info">
                    <article>
                        <p className="heading">Address:</p>
                        <p className="info">Sofia, Aleksandar Stamboliyski Blvd, 127</p>
                    </article>

                    <article>
                        <p className="heading">Phone number:</p>
                        <p className="info">+359 888 123 456</p>
                    </article>

                    <article>
                        <p className="heading">Email:</p>
                        <p className="info">bookworm@gmail.com</p>
                    </article>
                </div>

                <div className={styles["map"]}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.2296630477013!2d23.303786675092564!3d42.6988576136315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8546bcb289a1%3A0x180bc395ecc42a7!2z0LYu0LouINCX0L7QvdCwINCRLTUsINCx0YPQuy4g4oCe0JDQu9C10LrRgdCw0L3QtNGK0YAg0KHRgtCw0LzQsdC-0LvQuNC50YHQutC44oCcIDEyNywgMTMwMyDQodC-0YTQuNGP!5e0!3m2!1sbg!2sbg!4v1723722484183!5m2!1sbg!2sbg"
                        title="Bookworm"
                        // width="600"
                        // height="450"
                        // style="border:0;"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )

}