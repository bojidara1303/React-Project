import styles from './Header.module.css';

import { Link } from 'react-router-dom';
import { useContext } from 'react';

import AuthContext from '../../contexts/authenticationContext';

export default function Header() {
    const {
        isAuth,
        username
    } = useContext(AuthContext)
    return (
        <header>
            <nav className={styles["site-nav"]}>
                <Link to="/"><img src="/images/Logo-Bookworm.png" alt="logo" /></Link>
                <ul>
                    <li><Link className={styles["nav-link"]} to="/">Home</Link></li>
                    <li><Link className={styles["nav-link"]} to="/quotes">Quotes</Link></li>
                    <li><Link className={styles["nav-link"]} to="/books">Books</Link></li>
                    
                    {isAuth && (
                        <div className={styles["isAuthenticated"]}>
                            <li><Link className={styles["nav-link"]} to="/add-book">Add Book</Link></li>
                            <li><Link className={styles["nav-link"]} to="/logout"><span>Hello, {username} </span>| Logout</Link></li>
                        </div>
                    )}
                    {!isAuth && (
                        <div className={styles["isGuest"]}>
                            <li><Link className={styles["nav-link"]} to="/login">Login</Link></li>
                            <li><Link className={styles["nav-link"]} to="/register">Register</Link></li>
                        </div>

                    )}
                </ul>
            </nav>
        </header>
    )
}