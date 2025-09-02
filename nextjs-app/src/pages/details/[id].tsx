import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import { fetchItemDetails } from '../../utils/api';

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!item) return <div>Item not found</div>;

  return (
    <div className="container mx-auto p-4">
      <Header />
      <div className="card">
        <h1 className="text-2xl font-bold">{item.title}</h1>
        <p>{item.description}</p>
        {/* Render other item details here */}
      </div>
      <div className="mt-4">
        <button onClick={() => router.push('/listing')} className="btn">
          Voltar à Listagem
        </button>
        <button onClick={() => router.push('/')} className="btn">
          Voltar à Página Inicial
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;