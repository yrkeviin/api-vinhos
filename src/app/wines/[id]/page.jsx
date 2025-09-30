"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./page.module.css";
import Header from "../../../components/Header/Header";
import Loading from "../../../components/Loading/Loading";

export default function WineDetails() {
    const { id } = useParams();
    const [vinho, setVinho] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (id) {
            axios
                .get(`https://api.sampleapis.com/wines/reds/${id}`)
                .then((res) => {
                    setVinho(res.data);
                })
                .catch(() => {
                    toast.error("Erro ao carregar detalhes do vinho!");
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [id]);

    if (isLoading) {
        return <Loading />;
    }

    if (!vinho) {
        return (
            <main className={styles.page}>
                <Header />
                <div className={styles.errorContainer}>
                    <h2>Vinho não encontrado</h2>
                    <p>O vinho que você está procurando não existe ou foi removido.</p>
                    <Link href="/wines" className={styles.backLink}>
                        Voltar à lista
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className={styles.page}>
            <ToastContainer position="bottom-right" theme="colored" />
            <Header />

            <div className={styles.detailsContainer}>
                <div className={styles.imageContainer}>
                    <img src={vinho.image} alt={vinho.wine} className={styles.image} />
                </div>

                <div className={styles.infoContainer}>
                    <h1 className={styles.title}>{vinho.wine}</h1>
                    
                    <div className={styles.infoGrid}>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Vinícola</span>
                            <span className={styles.value}>{vinho.winery}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Localização</span>
                            <span className={styles.value}>{vinho.location?.replace('·', '· ')}</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Avaliação Média</span>
                            <span className={styles.value}>
                                ⭐ {vinho.rating?.average} ({vinho.rating?.reviews})
                            </span>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <Link href="/wines" className={styles.backLink}>
                            Voltar à lista
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}