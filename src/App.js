import React from 'react';
import './App.css';
import LoginProvider from './context/Login/LoginProvider';
import DrinksAndFoodsProvider from './context/DrinksAndFoods/DrinksAndFoodsProvider';
import HeaderProvider from './context/Header/HeaderProvider';
import ReceitaAtualProvider from './context/ReceitaAtual/ReceitaAtualProvider';
import Rotas from './Rotas';


function App() {
  return (
    <LoginProvider>
      <DrinksAndFoodsProvider>
        <HeaderProvider>
          <ReceitaAtualProvider>
            <Rotas />
          </ReceitaAtualProvider>
        </HeaderProvider>
      </DrinksAndFoodsProvider>
    </LoginProvider>
  );
}

export default App;
