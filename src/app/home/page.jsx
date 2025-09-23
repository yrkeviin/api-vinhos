import React from 'react'
import Header from "../../components/Header/Header"
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.separator}></div>

            <div className={styles.description}>
                <h1>Explore Our Wine Selection</h1>
                <p>Discover a handpicked collection of South Tyrolean wines.</p>
            </div>

            <div className={styles.menu}>
                <div className={styles.card}>
                    <h1>Storia ed Identità</h1>
                    <p>scopri</p>
                </div>
                <div className={styles.card2}>
                    <h1>Cantina e Vini</h1>
                    <p>scopri</p>
                </div>
                <div className={styles.card3}>
                    <h1>Altri prodotti</h1>
                    <p>scopri</p>
                </div>
                <div className={styles.card4}>
                    <h1>Wineshop ed Event</h1>
                    <p>scopri</p>
                </div>
            </div>
        </div>
    )
}
