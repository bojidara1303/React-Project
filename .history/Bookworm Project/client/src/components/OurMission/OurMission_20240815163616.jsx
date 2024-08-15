import styles from './OurMission.module.css';

export default function OurMission() {
    return (
        <section className={styles["our-mission"]}>
            <img src="/images/our-mission.png" />

            <h1 className={styles["our-mission-heading"]}>Our Mission</h1>
        </section>
    )
}