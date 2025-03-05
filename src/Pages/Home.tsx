import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Home.css'; 

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="clouds"></div>
      <img src="../public/nuvens-e-sol.png" alt="img" />
      <h2 className="title">Bem-vindo ao nosso aplicativo de clima!</h2>
      <p className="description">Aqui você pode verificar o clima de Fortaleza.</p>
      <Link to="/clima/fortaleza">
        <button className="weather-button">Ver Clima</button>
      </Link>
    </div>
  );
};

export default Home;
