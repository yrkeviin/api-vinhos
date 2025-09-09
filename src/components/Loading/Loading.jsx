import styles from "./Loading.module.css";

export default function Loading() {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loadingContent}>
                <img
                    src="/media/carrega.gif"
                    alt="Carregando..."
                    className={styles.loadingImage}
                />
                <p className={styles.loadingText}>
                    Carregando... Por favor, aguarde 🍷
                </p>
            </div>
        </div>
    );
}