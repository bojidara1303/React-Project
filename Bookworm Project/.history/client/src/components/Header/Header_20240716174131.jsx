import { Link } from 'react-router-dom'
import { useContext } from 'react'

import styles from './Header.module.css'

import AuthenticationContext from '../../contexts/authenticationContext'

export default function Header() {
    const { isAuthenticated, username } = useContext(AuthenticationContext)

    return (
        <header>
            <nav className={styles["site-nav"]}>
                <Link to="/"><img src="/images/Logo-Bookworm.png" alt="logo" /></Link>
                <ul>
                    {isAuthenticated && (
                        <div className={styles["isAuthenticated"]}>
                            <li><Link className={styles["nav-link"]} to="/">Home</Link></li>
                            <li><Link className={styles["nav-link"]} to="/add-book">Add Book</Link></li>
                            <li><Link className={styles["nav-link"]} to="/logout"><span>Hello, {username} </span>| Logout</Link></li>
                        </div>
                    )}
                    {!isAuthenticated && (
                        <div className={styles["isGuest"]}>
                            <li><Link className={styles["nav-link"]} to="/books">All Books</Link></li>
                            <li><Link className={styles["nav-link"]} to="/login">Login</Link></li>
                            <li><Link className={styles["nav-link"]} to="/register">Register</Link></li>
                        </div>

                    )}
                </ul>
            </nav>
        </header>
    )
}