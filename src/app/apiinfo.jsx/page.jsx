import styles from "./page.module.css";

export default function ApiInfo() {
    return (
        <main className={styles.page}>
            <h1 className={styles.title}>🍷 API: SampleAPIs - Wines</h1>
            <p>
                <strong>Documentação:</strong>{" "}
                <a
                href="https://sampleapis.com/api-list/wines"
                target="_blank"
                rel="noreferrer"
                >
                https://sampleapis.com/api-list/wines
                </a>
            </p>
            <p><strong>URL Base:</strong> https://api.sampleapis.com/wines</p>
            <p><strong>Endpoint:</strong> /reds</p>

            <h2 className={styles.subtitle}>Atributos:</h2>
            <ul>
                <li>id</li>
                <li>wine</li>
                <li>winery</li>
                <li>rating.average</li>
                <li>location</li>
                <li>image</li>
            </ul>

            <p className={styles.text}>
                Esta API fornece informações sobre vinhos de diferentes categorias
                (reds, whites, sparkling, etc.), incluindo nome, vinícola, avaliação,
                imagem e localização.
            </p>
        </main>
    );
}