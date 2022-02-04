import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import * as COMP from '../components';
import receitaAtualContext from '../context/ReceitaAtual/ReceitaAtualContex';
import drinksAndFoodsContext from '../context/DrinksAndFoods/DrinksAndFoodsContext';
import { apiReceitaAtual } from '../services/ApiDrinks';
import { apiRecommendFoods } from '../services/ApiFood';

export default function DetailDrink() {
  const { id } = useParams();
  const { receita, setReceita } = useContext(receitaAtualContext);
  const {
    mealsRecommended,
    setMealsRecommended } = useContext(drinksAndFoodsContext);
  const SIX = 6;

  useEffect(() => {
    apiReceitaAtual(id, setReceita);
  }, [id, setReceita]);

  useEffect(() => {
    apiRecommendFoods(setMealsRecommended);
  }, [id, setMealsRecommended]);

  const { strDrink, strCategory, strDrinkThumb, strInstructions } = receita;

  const ingredientsStr = Object.keys(receita)
    .filter((value) => value.includes('strIngredient'));
  const ingredients = ingredientsStr.map((value) => receita[value]);

  const quantityStr = Object.keys(receita)
    .filter((value) => value.includes('strMeasure'));
  const quantity = quantityStr.map((value) => receita[value]);

  console.log(mealsRecommended);
  return (
    <div>
      <COMP.DetailTop
        recipeTitle={ strDrink }
        receitaCategory={ strCategory }
        recipeImg={ strDrinkThumb }
      />
      <COMP.DetailBody
        ingredients={ ingredients }
        instructions={ strInstructions }
        quantity={ quantity }
      />
      <div className="flex overflow-x-scroll">
        {mealsRecommended && mealsRecommended.slice(0, SIX).map((food, i) => (
          <div className="object-contain h-full w-44" key={ i }>
            <COMP.DetailRecommend
              className=""
              recipeTitle={ food.strMeal }
              receitaCategory={ food.strCategory }
              recipeImg={ food.strMealThumb }
            />

          </div>
        ))}
      </div>
    </div>);
}
