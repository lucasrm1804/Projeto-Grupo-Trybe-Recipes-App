import React from 'react';
import './App.css';
import Rotas from './Rotas';
import LoginProvider from './context/LoginProvider';

function App() {
  return (
    <LoginProvider>
      <Rotas />
    </LoginProvider>
  );
}

export default App;
