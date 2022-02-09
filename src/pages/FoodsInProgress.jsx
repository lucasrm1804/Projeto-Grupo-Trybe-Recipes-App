import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FoodsInProgressHeader from '../components/RecipesInProgress/FoodsInProgressHeader';
import FoodsInProgressBody from '../components/RecipesInProgress/FoodsInProgressBody';
import ReceitaAtualContext from '../context/ReceitaAtual/ReceitaAtualContext';
import { apiReceitaAtual } from '../services/ApiFood';
import FoodsInProgressFooter from '../components/RecipesInProgress/FoodsInProgressFooter';

export default function FoodsInProgress() {
  const { receita, setReceita } = useContext(ReceitaAtualContext);
  const { id } = useParams();

  useEffect(() => {
    apiReceitaAtual(id, setReceita);
  }, [id, setReceita]);

  const { strMeal, strMealThumb, category, strInstructions } = receita;

  const ingredientsStr = Object.keys(receita)
    .filter((value) => value.includes('strIngredient'));
  const ingredients = ingredientsStr.map((value) => receita[value]);

  if (receita.length === 0) {
    return null;
  }
  return (

    <div>
      <div>
        <FoodsInProgressHeader
          strMeal={ strMeal }
          strMealThumb={ strMealThumb }
        />
      </div>
      <FoodsInProgressBody
        category={ category }
        ingredients={ ingredients }
      />

      <div />

      <div>
        <FoodsInProgressFooter
          strInstructions={ strInstructions }
        />
      </div>
    </div>
  );
}
