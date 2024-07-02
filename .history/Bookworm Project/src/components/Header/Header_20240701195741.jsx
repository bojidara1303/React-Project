import styles from './Header.module.css'

export default function Header() {
    return (
        <header>
            <nav className="site-nav">
             <img src="../public/images/Logo-Bookworm.png" alt="" />
                    <ul>
                        <li><a href="#"></a>Home</li>
                        <li><a href="#"></a>Catalog</li>
                        <li><a href="#"></a>Add Book</li>
                        <li><a href="#"></a>Login</li>
                        <li><a href="#"></a>Register</li>
                    </ul>
            </nav>
        </header>
    )
}