import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import { fetchItemDetails } from '../../utils/api';
import styles from './[id].module.css';

const DetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const getItemDetails = async () => {
        try {
          const data = await fetchItemDetails(id);
          setItem(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      getItemDetails();
    }
  }, [id]);

  if (loading) return (
    <div className={styles.page}>
      <Header />
      <div className={styles.loading}>Carregando detalhes do vinho...</div>
    </div>
  );
  
  if (error) return (
    <div className={styles.page}>
      <Header />
      <div className={styles.error}>Erro: {error}</div>
    </div>
  );
  
  if (!item) return (
    <div className={styles.page}>
      <Header />
      <div className={styles.notFound}>Vinho não encontrado</div>
    </div>
  );

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>{item.wine}</h1>
          <p className={styles.description}>
            <strong>Vinícola:</strong> {item.winery}<br/>
            <strong>Localização:</strong> {item.location}<br/>
            {item.rating && <><strong>Avaliação:</strong> {item.rating.average}/5 ({item.rating.reviews} avaliações)</>}
          </p>
          <div className={styles.buttonContainer}>
            <button onClick={() => router.push('/listing')} className={styles.btn}>
              Voltar à Listagem
            </button>
            <button onClick={() => router.push('/')} className={styles.btn}>
              Voltar à Página Inicial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;