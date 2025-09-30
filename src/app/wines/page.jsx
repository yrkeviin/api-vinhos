"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";

export default function WinesPage() {
    const [vinhos, setVinhos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://api.sampleapis.com/wines/reds")
            .then((res) => {
                setVinhos(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Erro:", err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
    <main className={styles.page}>
        <Header />

        <div className={styles.banner}>
            <img src="/images/Do campo à sua taça qualidade que inspira confiança.png" alt="" />
        </div>

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