import React from 'react'

import { Switch, Route } from 'react-router-dom'

// Components
import Home from './Home'
import Menu from './Menu'
import Nosotros from './Nosotros'
// Import Css
import './main.css'


const Main = () => {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route exact path="/nosotros">
          <Nosotros />
        </Route>
      </Switch>
    </div>
  );
}

export default Main
