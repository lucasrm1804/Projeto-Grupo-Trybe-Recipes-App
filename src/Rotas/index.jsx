import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Drinks from '../pages/Drinks';
import DetailDrinks from '../pages/DetailDrink';
import Explore from '../pages/Explore';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreDrinks from '../pages/ExploreDrinks';
import Foods from '../pages/Foods';
import DetailFoods from '../pages/DetailFood';
import DoneRecipes from '../pages/DoneRecipes';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import Profile from '../pages/Profile';
import ExploreIngredientsDrinks from '../pages/ExploreIngredientsDrinks';
import ExploreIngredientsFoods from '../pages/ExploreIngredientsFoods';
import ExploreNationalities from '../pages/ExploreNationalities';
import Ingredients from '../pages/Ingredients';
import FoodsIngredient from '../pages/FoodsIngredients';
import DrinksIngredient from '../pages/DrinksIngredients';
import NotFound from '../pages/NotFound';
import FoodsInProgress from '../pages/FoodsInProgress';
import DrinksInProgress from '../pages/DrinksInProgress';
import FoodRecipe from '../pages/FoodRecipe';
import DrinkRecipe from '../pages/DinkInRecipe';

export default function Rotas() {
  return (

    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/explore/Foods/ingredients/:id" component={ Ingredients } />
        <Route exact path="/explore/Drinks/ingredients/:id" component={ Ingredients } />
        <Route path="/explore/Drinks/ingredients" component={ DrinksIngredient } />
        <Route path="/explore/Foods/ingredients" component={ FoodsIngredient } />
        <Route exact path="/foods/:id/in-progress" component={ FoodsInProgress } />
        <Route exact path="/drinks/:id/in-progress" component={ DrinksInProgress } />
        <Route exact path="/foods/:id" component={ DetailFoods } />
        <Route exact path="/drinks/:id" component={ DetailDrinks } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ ExploreFoods } />
        <Route exact path="/explore/drinks" component={ ExploreDrinks } />
        <Route
          exact
          path="/explore/foods/ingredients"
          component={ ExploreIngredientsFoods }
        />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ ExploreIngredientsDrinks }
        />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ ExploreNationalities }
        />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route path="/explore/Drinks/nationalities" component={ NotFound } />
        <Route path="/Drinks/:id" component={ DrinkRecipe } />
        <Route path="/Foods/:id" component={ FoodRecipe } />

      </Switch>

    </div>);
}
