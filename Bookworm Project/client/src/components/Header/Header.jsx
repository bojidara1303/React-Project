import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header>
            <nav className={styles["site-nav"]}>
                <Link to="/"><img src="/images/Logo-Bookworm.png" alt="logo" /></Link>
                <ul>
                    <li><Link className={styles["nav-link"]} to="/">Home</Link></li>
                    <li><Link className={styles["nav-link"]} to="/books">All Books</Link></li>
                    <li><Link className={styles["nav-link"]} to="/add-book">Add Book</Link></li>
                    <li><Link className={styles["nav-link"]} to="/login">Login</Link></li>
                    <li><Link className={styles["nav-link"]} to="/register">Register</Link></li>
                </ul>
            </nav>
        </header>
    )
}