import React, { useState, useEffect } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import IngredientCards from './IngredientsCards';
import { ingredientDrinks } from '../services/ApiDrinks';

export default function DrinksIngredients() {
  const [ingredientsDrinksList, setIngredientsDrinksList] = useState();
  const TWELVE = 12;

  useEffect(() => {
    ingredientDrinks(setIngredientsDrinksList);
  }, [setIngredientsDrinksList]);

  return (
    <>
      <Header title="Explorar Ingredientes" />
      <div>
        { ingredientsDrinksList && ingredientsDrinksList
          .slice(0, TWELVE).map((ingredient, index) => (
            <IngredientCards
              path="drinks"
              type="thecocktaildb"
              key={ ingredient.strIngredient1 }
              index={ index }
              strIngredient={ ingredient.strIngredient1 }
            />
          )) }
      </div>
      <Footer />
    </>
  );
}
