import React from 'react'

// React Router
import { BrowserRouter as Router } from 'react-router-dom'

// Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Import Components
import Header from './Header'
import Main from './Main'

const initialState = {
  stateMenu: false,
  navigationActive: 'home',
};

const reducer = (state, action) => {
  if(action.type === 'SET_STATE_MENU') {
    return {...state, stateMenu: action.state}
  }
  if (action.type === "SET_NAVIGATION_ACTIVE") {
    return { ...state, navigationActive: action.active };
  }
  return state
}

const store = createStore(reducer, initialState)
const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <Header />
          <Main />
        </Router>
      </div>
    </Provider>
  )
}

export default App
