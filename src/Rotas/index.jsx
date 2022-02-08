import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Drinks from '../pages/Drinks';
import Explore from '../pages/Explore';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreDrinks from '../pages/ExploreDrinks';
import Foods from '../pages/Foods';
import DoneRecipes from '../pages/DoneRecipes';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import Profile from '../pages/Profile';
import ExploreIngredientsDrinks from '../pages/ExploreIngredientsDrinks';
import ExploreIngredientsFoods from '../pages/ExploreIngredientsFoods';
import ExploreNationalities from '../pages/ExploreNationalities';
import Ingredients from '../pages/Ingredients';
import FoodsIngredient from '../pages/FoodsIngredients';
import DrinksIngredient from '../pages/DrinksIngredients';

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
        <Route exact path="/foods/:id/in-progress" component="" />
        <Route exact path="/drinks/:id/in-progress" component="" />
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

      </Switch>

    </div>);
}
