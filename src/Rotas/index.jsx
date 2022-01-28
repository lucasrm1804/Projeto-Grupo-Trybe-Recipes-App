import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';

export default function Rotas() {
  return (

    <div>
      <Switch>
        <Route path="/" component={ Login } />
        <Route path="/foods" component="" />
        <Route path="/drinks" component="" />
        <Route path="/foods/:id" component="" />
        <Route path="/drinks/:id" component="" />
        <Route path="/foods/:id/in-progress" component="" />
        <Route path="/drinks/:id/in-progress" component="" />
        <Route path="/explore" component="" />
        <Route path="/explore/foods" component="" />
        <Route path="explore/drinks" component="" />
        <Route path="/explore/foods/ingredients" component="" />
        <Route path="/explore/drinks/ingredients" component="" />
        <Route path="/explore/foods/nationalities" component="" />
        <Route path="/explore/drinks/nationalities" component="" />
        <Route path="/profile" component="" />
        <Route path="/done-recipes" component="" />
        <Route path="/favorite-recipes" component="" />

      </Switch>

    </div>);
}
