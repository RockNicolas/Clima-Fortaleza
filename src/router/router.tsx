import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import ClimaPage from '../Pages/Clima';

const RouterComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clima/fortaleza" element={<ClimaPage />} />
    </Routes>
  );
};

export default RouterComponent;
