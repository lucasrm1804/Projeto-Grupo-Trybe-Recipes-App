import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import * as COMP from '../components';
import receitaAtualContext from '../context/ReceitaAtual/ReceitaAtualContext';
import drinksAndFoodsContext from '../context/DrinksAndFoods/DrinksAndFoodsContext';
import { apiReceitaAtual } from '../services/ApiDrinks';
import { apiRecommendFoods } from '../services/ApiFood';

export default function DetailDrink() {
  const { id } = useParams();
  const { receita, setReceita, label, setLabel } = useContext(receitaAtualContext);
  const {
    mealsRecommended,
    setMealsRecommended } = useContext(drinksAndFoodsContext);
  const SIX = 6;

  useEffect(() => {
    setLabel('drinks');
    apiReceitaAtual(id, setReceita);
    apiRecommendFoods(setMealsRecommended);
  }, []);

  const { strDrink, strAlcoholic, strDrinkThumb, strInstructions } = receita;

  const ingredientsStr = Object.keys(receita)
    .filter((value) => value.includes('strIngredient'));
  const ingredients = ingredientsStr.map((value) => receita[value]);

  const quantityStr = Object.keys(receita)
    .filter((value) => value.includes('strMeasure'));
  const quantity = quantityStr.map((value) => receita[value]);

  return (
    <div>
      <COMP.DetailTop
        recipeTitle={ strDrink }
        receitaCategory={ strAlcoholic }
        recipeImg={ strDrinkThumb }
      />
      <COMP.DetailBody
        ingredients={ ingredients }
        instructions={ strInstructions }
        quantity={ quantity }
        id={ id }
        label={ label }
      />
      <div
        className="h-54 pt-4 w-full flex flex-row flex-nowrap overflow-x-scroll"
      >
        {mealsRecommended && mealsRecommended.slice(0, SIX).map((food, i) => (
          <div className="h-54 w-40 mx-2 pl-2" key={ i }>
            <COMP.DetailRecommend
              className="h-54 w-40 mx-2 border border-black"
              recipeTitle={ food.strMeal }
              receitaCategory={ food.strCategory }
              recipeImg={ food.strMealThumb }
              i={ i }
            />

          </div>
        ))}
      </div>
    </div>);
}
