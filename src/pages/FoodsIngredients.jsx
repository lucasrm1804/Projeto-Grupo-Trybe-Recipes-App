import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import IngredientCards from '../components/IngredientsCards';
import { ingredientsMeals } from '../services/ApiFood';

export default function FoodsIngredients() {
  const [ingredientsList, setIngredientsList] = useState();
  const TWELVE = 12;

  useEffect(() => {
    ingredientsMeals(setIngredientsList);
  }, [setIngredientsList]);

  return (
    <>
      <Header label="Explore Ingredients" />
      <div>
        { ingredientsList && ingredientsList.slice(0, TWELVE).map((ingredient, index) => (
          <IngredientCards
            path="foods"
            type="themealdb"
            key={ ingredient.idIngredient }
            index={ index }
            strIngredient={ ingredient.strIngredient }
          />
        )) }
      </div>
      <Footer />
    </>
  );
}
