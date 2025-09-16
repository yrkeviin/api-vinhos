import React from 'react'
import Header from "../../components/Header/Header"
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.menu}>
                <div className={styles.card}>
                    <h1>Card 1</h1>
                    <p>texto1</p>
                </div>
                <div className={styles.card2}>
                    <h1>Card 2</h1>
                    <p>texto2</p>
                </div>
                <div className={styles.card3}>
                    <h1>Card 3</h1>
                    <p>texto3</p>
                </div>
                <div className={styles.card4}>
                    <h1>Card 4</h1>
                    <p>texto4</p>
                </div>
            </div>
        </div>
    )
}
