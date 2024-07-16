import { Link } from 'react-router-dom'
import { useContext } from 'react'

import styles from './Header.module.css'

import AuthenticationContext from '../../contexts/authenticationContext'

export default function Header() {
const {} = useContext(AuthenticationContext)

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