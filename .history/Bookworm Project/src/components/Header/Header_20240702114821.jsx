import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header>
            <nav className={styles["site-nav"]}>
                <img src="../public/images/Logo-Bookworm.png" alt="" />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#"></a>Catalog</li>
                    <li><a href="#"></a>Add Book</li>
                    <li><a href="#"></a>Login</li>
                    <li><a href="#"></a>Register</li>
                </ul>
            </nav>
        </header>
    )
}