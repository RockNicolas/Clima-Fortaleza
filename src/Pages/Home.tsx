import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Home.css'; 
import { obterClima } from '../API/Api'; 

const Home: React.FC = () => {
  const [clima, setClima] = useState<string>(''); 
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchClima = async () => {
      const climaData = await obterClima('Fortaleza');
      if (climaData) {
        const condition = climaData.weather[0].main.toLowerCase(); 
        setClima(condition);
      }
      setLoading(false);
    };

    fetchClima();
  }, []);

  const getImageForWeather = () => {
    switch (clima) {
      case 'clear':
        return '..public/icon/sol.png';
      case 'clouds':
        return '../public/icon/nuvens.png'; 
      case 'rain':
        return '..public/icon/chuva.png'; 
      default:
        return '../public/icon/nuvens-e-sol.png'; 
    }
  };

  return (
    <div className="home-container">
      <div className="clouds"></div>
      <img src={getImageForWeather()} alt="img" />
      <h2 className="title">Bem-vindo ao aplicativo de clima!</h2>
      <p className="description">Aqui você pode verificar o clima de Fortaleza.</p>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <Link to="/clima/fortaleza">
          <button className="weather-button">Ver Clima</button>
        </Link>
      )}
    </div>
  );
};

export default Home;
