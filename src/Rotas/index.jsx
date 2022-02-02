import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Profile from '../pages/Profile';

export default function Rotas() {
  return (

    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component="" />
        <Route exact path="/drinks" component="" />
        <Route exact path="/foods/:id" component="" />
        <Route exact path="/drinks/:id" component="" />
        <Route exact path="/foods/:id/in-progress" component="" />
        <Route exact path="/drinks/:id/in-progress" component="" />
        <Route exact path="/explore" component="" />
        <Route exact path="/explore/foods" component="" />
        <Route exact path="explore/drinks" component="" />
        <Route exact path="/explore/foods/ingredients" component="" />
        <Route exact path="/explore/drinks/ingredients" component="" />
        <Route exact path="/explore/foods/nationalities" component="" />
        <Route exact path="/explore/drinks/nationalities" component="" />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component="" />
        <Route exact path="/favorite-recipes" component="" />

      </Switch>

    </div>);
}
