"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./page.module.css";

export default function WineDetails() {
    const { id } = useParams();
    const [vinho, setVinho] = useState(null);

    useEffect(() => {
    axios.get(`https://api.sampleapis.com/wines/reds/${id}`)
        .then((res) => setVinho(res.data))
        .catch(() => {
        toast.error("Erro ao carregar detalhes do vinho!");
        });
    }, [id]);

    if (!vinho) return <p className={styles.text}>Carregando...</p>;

    return (
    <main className={styles.page}>
        <ToastContainer />
        <img src={vinho.image} alt={vinho.wine} className={styles.imageBig} />
        <h1 className={styles.title}>{vinho.wine}</h1>
        <p>Vinícola: {vinho.winery}</p>
        <p>Localização: {vinho.location || "N/A"}</p>
        <p>Nota média: {vinho.rating?.average || "N/A"}</p>

        <div className={styles.links}>
            <Link href="/wines">Voltar à lista</Link>
            <Link href="/">Voltar à Home</Link>
        </div>
    </main>
    );
}