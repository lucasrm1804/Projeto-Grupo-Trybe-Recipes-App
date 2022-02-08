import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientCards from '../components/IngredientsCards';
import { ingredientDrinks } from '../services/ApiDrinks';

export default function DrinksIngredients() {
  const [ingredientsDrinksList, setIngredientsDrinksList] = useState();
  const TWELVE = 12;

  useEffect(() => {
    ingredientDrinks(setIngredientsDrinksList);
  }, [setIngredientsDrinksList]);

  return (
    <>
      <Header label="Explorar Ingredientes" />
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
