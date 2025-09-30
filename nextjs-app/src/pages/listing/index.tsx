import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import { fetchItems } from '../../utils/api';
import styles from './index.module.css';

const ListingPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await fetchItems();
        setItems(data.slice(0, 12));
      } catch (err) {
        setError('Erro ao carregar os vinhos.');
      } finally {
        setLoading(false);
      }
    };

    loadItems();
  }, []);

  if (loading) return (
    <div className={styles.page}>
      <Header />
      <div className={styles.loading}>Carregando vinhos...</div>
    </div>
  );
  
  if (error) return (
    <div className={styles.page}>
      <Header />
      <div className={styles.error}>{error}</div>
    </div>
  );

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Coleção de Vinhos</h1>
        <div className={styles.grid}>
          {items.map(item => (
            <div key={item.id} className={styles.card}>
              <h2 className={styles.cardTitle}>{item.wine}</h2>
              <p className={styles.cardDescription}>
                <strong>Vinícola:</strong> {item.winery}<br/>
                <strong>Localização:</strong> {item.location}
              </p>
              <Link href={`/details/${item.id}`}>
                <a className={styles.cardLink}>Ver Detalhes</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingPage;