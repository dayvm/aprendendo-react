import styles from './Header.module.css'
import logo from '../assets/logo-random.webp'

console.log(styles)

export function Header () {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo do projeto" />
        </header>
    )
}