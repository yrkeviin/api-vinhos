"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "../../components/Header/Header";

export default function WinesPage() {
    const [vinhos, setVinhos] = useState([]);

    useEffect(() => {
    axios.get("https://api.sampleapis.com/wines/reds")
        .then((res) => setVinhos(res.data))
        .catch((err) => console.error("Erro:", err));
    }, []);

    return (
    <main className={styles.page}>
        <Header />

        <div className={styles.grid}>
        {vinhos.map((vinho) => (
            <div key={vinho.id} className={styles.card}>
            <img src={vinho.image} alt={vinho.wine} className={styles.image} />
            <h3>{vinho.wine}</h3>
            <p>Vinícola: {vinho.winery}</p>
            <Link href={`/wines/${vinho.id}`}>Detalhes</Link>
            </div>
        ))}
        </div>
    </main>
    );
}