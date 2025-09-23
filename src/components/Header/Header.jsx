import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.nav}>
                <ul>
                    <a href=""><li className={styles.link}>Home</li></a>
                    <a href="/wines"><li className={styles.link}>Wines</li></a>
                    <a href=""><li className={styles.link}>Details</li></a>
                </ul>
            </div>

            <div className={styles.logo}>
                <img src="/images/logov1-removebg-preview.png" alt="Os Melhores Vinhos" />
            </div>

        </div>
    );
}