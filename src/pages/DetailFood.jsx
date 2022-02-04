import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import * as COMP from '../components';
import receitaAtualContext from '../context/ReceitaAtual/ReceitaAtualContex';
import drinksAndFoodsContext from '../context/DrinksAndFoods/DrinksAndFoodsContext';
import { apiReceitaAtual } from '../services/ApiFood';
import { apiRecommendDrinks } from '../services/ApiDrinks';

export default function DetailFoods() {
  const { id } = useParams();
  const { receita, setReceita } = useContext(receitaAtualContext);
  const { drinksRecommended, setDrinksRecommended } = useContext(foodrinksAndFoodsContextdsAnd)

  useEffect(() => {
    apiReceitaAtual(id, setReceita);
  }, [id, setReceita]);

  const { strMeal, strCategory, strMealThumb, strInstructions, strYoutube } = receita;

  const ingredientsStr = Object.keys(receita)
    .filter((value) => value.includes('strIngredient'));
  const ingredients = ingredientsStr.map((value) => receita[value]);

  const quantityStr = Object.keys(receita)
    .filter((value) => value.includes('strMeasure'));
  const quantity = quantityStr.map((value) => receita[value]);

  return (
    <div>
      <COMP.DetailTop
        recipeTitle={ strMeal }
        receitaCategory={ strCategory }
        recipeImg={ strMealThumb }
      />
      <COMP.DetailBody
        ingredients={ ingredients }
        instructions={ strInstructions }
        quantity={ quantity }
      />
      <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4">
        <h2>Video</h2>
        <video data-testid="video" width="360" height="180" controls>
          <track
            kind="captions"
          />
          <source src={ strYoutube } />
        </video>
      </div>
    </div>);
}
