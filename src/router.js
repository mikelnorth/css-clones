import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/home/Home.js'
import Nike from './components/nike/Nike.js'

export default (
  <div>
    <Switch>
      <Route component={Home} exact path='/' />
      <Route component={Nike} path='/nike' />      
    </Switch>
</div>
)