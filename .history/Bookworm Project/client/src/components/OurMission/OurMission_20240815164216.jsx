import styles from './OurMission.module.css';

export default function OurMission() {
    return (
        <section className={styles["our-mission"]}>
            <img src="/images/our-mission.png" />
            {/* <div className="our-mission-info"></div> */}
            <h1 className={styles["our-mission-heading"]}>Our Mission</h1>
            <p className={styles["our-mission-text"]}>Bookworm is a project which aims to gather together
                all book lovers and to give them the opportunity to exchange opinions of different
                books and to enrich its library by adding new books to it</p>
        </section>
    )
}