import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FoodsInProgressHeader from '../components/RecipesInProgress/FoodsInProgressHeader';
import FoodsInProgressBody from '../components/RecipesInProgress/FoodsInProgressBody';
import ReceitaAtualContext from '../context/ReceitaAtual/ReceitaAtualContext';
import { apiReceitaAtual } from '../services/ApiFood';
import FoodsInProgressFooter from '../components/RecipesInProgress/FoodsInProgressFooter';
import { getInProgress } from '../services/GetLocalStorage';
import { saveRecipesInProgress } from '../services/SaveLocalStorage';
import Loading from '../components/Loading';

export default function FoodsInProgress() {
  const { receita, setReceita } = useContext(ReceitaAtualContext);
  const [disabled] = useState(true);
  const [label] = useState('foods');
  const { id } = useParams();

  const funcao = async () => {
    await apiReceitaAtual(id, setReceita)
      .catch(() => <Loading />);
  };

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
    funcao();
  }, []);

  const {
    strMeal,
    strMealThumb,
    strCategory,
    strInstructions,
    idMeal,
    strArea } = receita;

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
          idMeal={ idMeal }
          label={ label }
          category={ strCategory }
          nationality={ strArea }

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
          disabled={ disabled }
          ingredients={ ingredients }
        />
      </div>
    </div>
  );
}
