import styles from './header.module.css';
const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_list_item}>
                        <a href='/'>home</a>
                    </li>
                    <li className={styles.nav_list_item}>
                        <a href='/'>About</a>
                    </li>
                    <li className={styles.nav_list_item}>
                        <a href='/'>Contact</a>
                    </li>
                </ul>
                <div>
                    <input id={styles.search} type="text" placeholder="Search..." />
                </div>
                <div className={styles.profile_img}>
                    <img id={styles.profile_img} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo" />
                </div>
            </nav>
        </header>
    );
};
export default Header;