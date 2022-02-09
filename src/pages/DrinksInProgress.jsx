import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ReceitaAtualContext from '../context/ReceitaAtual/ReceitaAtualContext';
import { apiReceitaAtual } from '../services/ApiDrinks';
import DrinksInProgressHeader
from '../components/RecipesInProgress/DrinksInProgressHeader';
import DrinksInProgressBody from '../components/RecipesInProgress/DrinksInProgressBody';
import DrinksInProgressFooter
from '../components/RecipesInProgress/DrinksInProgressFooter';
import { saveRecipesInProgress } from '../services/SaveLocalStorage';
import { getInProgress } from '../services/GetLocalStorage';

export default function DrinksInProgress() {
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

  const { strDrink, strAlcoholic, strDrinkThumb, strInstructions } = receita;

  const ingredientsStr = Object.keys(receita)
    .filter((value) => value.includes('strIngredient'));
  const ingredients = ingredientsStr.map((value) => receita[value]);

  if (receita.length === 0) {
    return null;
  }
  return (
    <div>
      <DrinksInProgressHeader
        strDrink={ strDrink }
        strDrinkThumb={ strDrinkThumb }
      />

      <DrinksInProgressBody
        strAlcoholic={ strAlcoholic }
        ingredients={ ingredients }
      />

      <DrinksInProgressFooter
        strInstructions={ strInstructions }
      />

    </div>
  );
}
