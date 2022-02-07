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

export default function Rotas() {
  return (

    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/foods/:id" component={ DetailFoods } />
        <Route exact path="/drinks/:id" component={ DetailDrinks } />
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
