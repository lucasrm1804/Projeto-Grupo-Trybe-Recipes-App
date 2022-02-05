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
  const {
    drinksRecommended,
    setDrinksRecommended } = useContext(drinksAndFoodsContext);
  const SIX = 6;

  useEffect(() => {
    apiReceitaAtual(id, setReceita);
  }, [id, setReceita]);

  useEffect(() => {
    apiRecommendDrinks(setDrinksRecommended);
  }, [id, setDrinksRecommended]);

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
      <div
        className="h-54 pt-4 w-full flex flex-row flex-nowrap overflow-x-scroll"
      >
        {drinksRecommended && drinksRecommended.slice(0, SIX).map((drink, i) => (
          <div className="h-54 w-40 mx-2 pl-2" key={ i }>
            <COMP.DetailRecommend
              className="h-54 w-40 mx-2"
              recipeTitle={ drink.strDrink }
              receitaCategory={ drink.strAlcoholic }
              recipeImg={ drink.strDrinkThumb }
              i={ i }
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          data-testid="start-recipe-btn"
          type="button"
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4
          border-b-4 border-blue-700 hover:border-blue-500 rounded fixed bottom-0"
        >
          Iniciar Receita
        </button>
      </div>
    </div>);
}
