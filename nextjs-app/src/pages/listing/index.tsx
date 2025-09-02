import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const ListingPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://api.example.com/items'); // Substitua pela URL da API
        setItems(response.data);
      } catch (err) {
        setError('Erro ao carregar os itens.');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Listagem de Itens</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item => (
          <div key={item.id} className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p>{item.description}</p>
            <Link href={`/details/${item.id}`}>
              <a className="text-blue-500 hover:underline">Detalhes</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingPage;