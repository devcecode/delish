import React from 'react'

import { Switch, Route } from 'react-router-dom'

// Components
import Home from './Home'
import Menu from './Menu'
// Import Css
import './main.css'
import About from './About'


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
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default Main
