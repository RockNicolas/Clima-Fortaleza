import axios from 'axios';

const API_KEY = '6b37221f05cd8c9669d038255b43e1ff';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const obterClima = async (cidade: string) => {
  try {
    const resposta = await axios.get(BASE_URL, {
      params: {
        q: cidade,
        appid: API_KEY,
        units: 'metric', 
        lang: 'pt_br',
      },
    });
    return resposta.data;
  } catch (erro) {
    console.error('Erro ao obter o clima:', erro);
    return null;
  }
};
