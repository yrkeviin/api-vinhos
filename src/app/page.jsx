import Link from "next/link";
import styles from "./page.module.css";

export default function Perfil() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundElements}>
        <div className={styles.circle}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>

      <div className={styles.profileCard}>
        <div className={styles.cardHeader}>
          <div className={styles.avatar}>
            <div className={styles.avatarBorder}>
              <img src="/images/kevinPerf.jpg" alt="Avatar de Kevin" />
            </div>
            <div className={styles.statusDot}></div>
          </div>
        </div>

        <div className={styles.cardBody}>
          <div className={styles.info}>
            <h1 className={styles.name}>Kevin E. Lima</h1>
            <p className={styles.subtitle}>2TDS1 - SENAI Valinhos</p>
            <div className={styles.quote}>
              <span className={styles.quoteIcon}>💫</span>
              <h3>"O sucesso é a soma de pequenos esforços repetidos dia após dia."</h3>
              <span className={styles.quoteIcon}>💫</span>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.socialSection}>
            <h4 className={styles.socialTitle}>Conecte-se comigo</h4>
            <div className={styles.socialLinks}>
              <Link href="https://www.linkedin.com/in/kevin-e-lima/" target="_blank" className={styles.socialLink}>
                <div className={styles.socialIcon}>
                  <img src="/icons/linkedin.svg" alt="LinkedIn"/>
                </div>
                <span>LinkedIn</span>
              </Link>
              <Link href="https://github.com/yrkeviin" target="_blank" className={styles.socialLink}>
                <div className={styles.socialIcon}>
                  <img src="/icons/github.svg" alt="GitHub"/>
                </div>
                <span>GitHub</span>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.cardFooter}>
          <Link href="/home" className={styles.homeButton}>
            <span className={styles.buttonIcon}>🏠</span>
            <span>Voltar ao Home</span>
            <div className={styles.buttonRipple}></div>
          </Link>
        </div>
      </div>
    </div>
  );
}