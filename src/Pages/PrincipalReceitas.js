import React, { useState, useEffect } from 'react';
import { drinksIniciais } from '../services/ApiDrinks';

export default function PrincipalReceitas() {
  const [initialFood, setInitialFood] = useState('');

  const initialListFood = async () => {
    const response = await drinksIniciais();
    setInitialFood(response);
    console.log(response);
  };

  useEffect(() => {
    initialListFood();
  }, []);
  return (
    <div>

      <div>
        {initialFood.length > 0 && initialFood.map((food) => (
          <div
            key={ food.idDrink }
          >
            <img src={ food.strDrinkThumb } alt={ `imagem ${food.strDrink}` } />
            <p>{food.strDrink}</p>

          </div>
        ))}
      </div>
    </div>
  );
}
