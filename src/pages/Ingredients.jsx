import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { filterByIngredientDrinks } from '../services/ApiDrinks';
import { filterByIngredient } from '../services/ApiFood';

export default function Ingredients() {
  const { location: { pathname } } = useHistory();
  const ingrediente = pathname.split('/');
  const TWELVE = 12;

  const [ingredientsList, setIngredientsList] = useState();

  useEffect(() => {
    if (ingrediente[2] === 'foods') {
      filterByIngredient(setIngredientsList, ingrediente[4]);
      return;
    }

    if (ingrediente[2] === 'drinks') {
      filterByIngredientDrinks(setIngredientsList, ingrediente[4]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header title="Explorar Ingredientes" />
      <div className="parent-cards">
        { ingrediente[2] === 'foods' && ingredientsList
          && ingredientsList.slice(0, TWELVE).map((ingredient, index) => (
            <div
              key={ ingredient.idMeal }
              data-testid={ `${index}-recipe-card` }
            >
              <img
                key={ ingredient.idMeal }
                data-testid={ `${index}-card-img` }
                src={ ingredient.strMealThumb }
                alt={ index }
              />
              <p data-testid={ `${index}-card-name` }>{ ingredient.strMeal }</p>
            </div>
          )) }
        { ingredientsList && ingrediente[2] === 'drinks'
         && ingredientsList.slice(0, TWELVE)
           .map(({ strDrink, idDrink, strDrinkThumb }, index) => (
             <div
               key={ idDrink }
               data-testid={ `${index}-recipe-card` }
             >
               <img
                 key={ idDrink }
                 data-testid={ `${index}-card-img` }
                 src={ strDrinkThumb }
                 alt={ index }
               />
               <p data-testid={ `${index}-card-name` }>{ strDrink }</p>
             </div>
           )) }
      </div>
      <Footer />
    </>
  );
}
