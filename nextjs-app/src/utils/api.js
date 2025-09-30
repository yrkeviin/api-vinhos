import axios from 'axios';

const API_BASE_URL = 'https://api.sampleapis.com/wines';

export const fetchItems = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/reds`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao carregar os vinhos');
  }
};

export const fetchItemDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/reds/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao carregar detalhes do vinho');
  }
};