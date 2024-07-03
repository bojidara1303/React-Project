import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header>
            <nav className={styles["site-nav"]}>
                <img src="../public/images/Logo-Bookworm.png" alt="logo" />
                <ul>
                    <li className={styles["nav-li"]}><Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link></li>
                    <li className={styles["nav-li"]}><Link style={{ textDecoration: 'none', color: 'white' }} to="/catalog">Catalog</Link></li>
                    <li className={styles["nav-li"]}><Link style={{ textDecoration: 'none', color: 'white' }} to="/add">Add Book</Link></li>
                    <li className={styles["nav-li"]}><Link style={{ textDecoration: 'none', color: 'white' }} to="/login">Login</Link></li>
                    <li className={styles["nav-li"]}><Link style={{ textDecoration: 'none', color: 'white' }} to="/register">Register</Link></li>
                </ul>
            </nav>
        </header>
    )
}