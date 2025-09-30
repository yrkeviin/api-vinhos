import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.nav}>
                <ul>
                    <Link href="/listing"><li className={styles.link}>Listagem</li></Link>
                    <Link href="/"><li className={styles.link}>Home</li></Link>
                </ul>
            </div>

            <div className={styles.logo}>
                <img src="/images/logov1-removebg-preview.png" alt="Os Melhores Vinhos" />
            </div>
        </div>
    );
}