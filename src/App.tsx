import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterComponent from './router/router';

const App: React.FC = () => {
  return (
    <Router>  
      <RouterComponent />
    </Router>
  );
};

export default App;
