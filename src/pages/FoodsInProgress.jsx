import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FoodsInProgressHeader from '../components/RecipesInProgress/FoodsInProgressHeader';
import FoodsInProgressBody from '../components/RecipesInProgress/FoodsInProgressBody';
import ReceitaAtualContext from '../context/ReceitaAtual/ReceitaAtualContext';
import { apiReceitaAtual } from '../services/ApiFood';
import FoodsInProgressFooter from '../components/RecipesInProgress/FoodsInProgressFooter';
import { getInProgress } from '../services/GetLocalStorage';
import { saveRecipesInProgress } from '../services/SaveLocalStorage';

export default function FoodsInProgress() {
  const { receita, setReceita } = useContext(ReceitaAtualContext);
  const { id } = useParams();

  useEffect(() => {
    const getLocalStorage = getInProgress();

    if (!getLocalStorage) {
      const INITIAL = {
        cocktails: {},
        meals: {},
      };
      saveRecipesInProgress(JSON.stringify(INITIAL));
    }
  }, []);

  useEffect(() => {
    apiReceitaAtual(id, setReceita);
  }, [id, setReceita]);

  const { strMeal, strMealThumb, strCategory, strInstructions } = receita;

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
        category={ strCategory }
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
