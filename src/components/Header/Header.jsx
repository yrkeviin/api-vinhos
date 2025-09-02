import styles from "./Header.module.css";

export default function Header() {
    return (
        <header>
            <div>
                <h1 className={styles.title}>Os Melhores</h1>
                <h1 className={styles.title}>Vinhos</h1>
            </div>

            <div>
                <ul>
                    <a href=""><li className={styles.link}>Home</li></a>
                    <a href=""><li className={styles.link}>Wines</li></a>
                    <a href=""><li className={styles.link}>Details</li></a>
                </ul>
            </div>
        </header>
    );
}