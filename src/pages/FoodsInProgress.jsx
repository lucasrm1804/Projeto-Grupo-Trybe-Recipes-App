import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FoodsInProgressHeader from '../components/RecipesInProgress/FoodsInProgressHeader';
import ReceitaAtualContext from '../context/ReceitaAtual/ReceitaAtualContext';
import { apiReceitaAtual } from '../services/ApiFood';

export default function FoodsInProgress() {
  const { receita, setReceita } = useContext(ReceitaAtualContext);
  const { id } = useParams();

  useEffect(() => {
    apiReceitaAtual(id, setReceita);
  }, [id, setReceita]);

  const { strMeal, strMealThumb } = receita;
  return (
    <div>
      <FoodsInProgressHeader
        strMeal={ strMeal }
        strMealThumb={ strMealThumb }
      />
    </div>
  );
}
