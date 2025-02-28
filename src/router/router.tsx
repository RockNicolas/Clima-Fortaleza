import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import ClimaFortaleza from '../components/ClimaFortaleza';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ClimaFortaleza />} />
    </Routes>
  );
};

export default Router;
