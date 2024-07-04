import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header>
            <nav className={styles["site-nav"]}>
                <img src="/images/Logo-Bookworm.png" alt="logo" />
                <ul>
                    {/* <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/catalog">Catalog</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/add">Add Book</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/login">Login</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/register">Register</Link></li> */}

                    <li><NavLink className={styles["nav-link "]} to="/">Home</NavLink></li>
                    <li><NavLink className={styles["nav-link "]} to="/catalog">Catalog</NavLink></li>
                    <li><NavLink className={styles["nav-link "]} to="/add">Add Book</NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">Login</NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none', color: 'white' }} to="/register">Register</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}