import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <Image
        src="/avatar.png"
        alt="Foto do aluno"
        width={120}
        height={120}
        className={styles.avatar}
      />
      <h1 className={styles.title}>Turma DS2025</h1>
      <h2 className={styles.subtitle}>Escola SENAI / SESI</h2>
      <h3 className={styles.name}>Kevin Lima</h3>
      <p className={styles.quote}>
        “O sucesso é a soma de pequenos esforços repetidos dia após dia.” 💡
      </p>

      <div className={styles.links}>
        <Link href="/apiinfo">Sobre a API</Link>
        <Link href="/wines">Lista de Vinhos</Link>
      </div>
    </main>
  );
}