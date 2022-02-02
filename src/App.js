import React from 'react';
import './App.css';
import Rotas from './Rotas';
import LoginProvider from './context/Login/LoginProvider';
import DrinksAndFoodsProvider from './context/DrinksAndFoods/DrinksAndFoodsProvider';
import HeaderProvider from './context/Header/HeaderProvider';

function App() {
  return (
    <LoginProvider>
      <DrinksAndFoodsProvider>
        <HeaderProvider>
          <Rotas />
        </HeaderProvider>
      </DrinksAndFoodsProvider>
    </LoginProvider>
  );
}

export default App;
