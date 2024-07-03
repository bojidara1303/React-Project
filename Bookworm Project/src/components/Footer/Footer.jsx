import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer>
            <p className={styles["copyright"]}>&copy; 2024 Bookworm | All Rights Reserved</p>
        </footer>
    )
}