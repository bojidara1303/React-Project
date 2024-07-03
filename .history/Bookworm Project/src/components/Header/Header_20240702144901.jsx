import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header>
            <nav className={styles["site-nav"]}>
                <img src="../public/images/Logo-Bookworm.png" alt="logo" />
                <ul>
                    <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                    <li><Link to="/add">Add Book</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </header>
    )
}