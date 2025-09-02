import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <main className={styles.container}>

      <div className={styles.perfil}>
        <div className={styles.avatar}>
          <img src="/images/kevinPerf.jpg" alt="Avatar de Kevin" />
        </div>

        <div className={styles.info}>
          <h1>Kevin E. Lima</h1>
          <p>2TDS1 - SENAI Valinhos</p>
          <h3>✨ "O sucesso é a soma de pequenos esforços repetidos dia após dia." ✨</h3>
        </div>

        <div className={styles.redesSociais}>
          <ul>
            <li>
              <Link href="https://www.linkedin.com/in/kevin-e-lima/" target="_blank">
                <img src="/icons/linkedin.svg" alt="LinkedIn"/>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/kevinalmeida" target="_blank">
                <img src="/icons/github.svg" alt="GitHub"/>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.botao}>
          <button>Ir Para Home</button>
        </div>
      </div>
    </main>
  );
}