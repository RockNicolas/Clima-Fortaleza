import axios from 'axios';


const API_KEY = process.env.REACT_APP_API_KEY;
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
