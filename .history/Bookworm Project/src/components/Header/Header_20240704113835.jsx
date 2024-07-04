import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header>
            <nav className={styles["site-nav"]}>
                <img src="/images/Logo-Bookworm.png" alt="logo" />
                <ul>
                    <li><NavLink className={styles["nav-link"]} to="/">Home</NavLink></li>
                    <li><NavLink className={styles["nav-link"]} to="/catalog">Catalog</NavLink></li>
                    <li><NavLink className={styles["nav-link"]} to="/add">Add Book</NavLink></li>
                    <li><NavLink className={styles["nav-link"]} to="/login">Login</NavLink></li>
                    <li><NavLink className={styles["nav-link"]} to="/register">Register</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}