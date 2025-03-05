import React, { useEffect, useState } from 'react';
import { obterClima } from '../API/Api';
import '../Style/ClimaFortaleza.css'; 

type Clima = {
  temperatura: string;
  descricao: string;
  icone: string;
};

const ClimaFortaleza: React.FC = () => {
  const [clima, setClima] = useState<Clima | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const buscarClima = async () => {
      try {
        const dados = await obterClima('Fortaleza');
        console.log(dados); 
        if (dados) {
          const climaFormatado = {
            temperatura: dados.main.temp.toFixed(1),
            descricao: dados.weather[0].description,
            icone: `http://openweathermap.org/img/wn/${dados.weather[0].icon}.png`,
          };
          setClima(climaFormatado);
        } else {
          setClima(null);
        }
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar o clima', error);
        setLoading(false);
      }
    };

    buscarClima();
  }, []);

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  if (!clima) {
    return <div className="error">Erro ao obter o clima. Tente novamente mais tarde.</div>;
  }

  return (
    <div className="clima-container">
      <h1 className="titulo">Clima em Fortaleza</h1>
      <div className="clima-info">
        <img className="clima-icone" src={clima.icone} alt="Ícone do clima" />
        <p className="descricao">{clima.descricao}</p>
        <h2 className="temperatura">{clima.temperatura}°C</h2>
      </div>
    </div>
  );
};

export default ClimaFortaleza;
