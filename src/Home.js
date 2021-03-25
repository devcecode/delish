import React, { useEffect } from 'react'
import './home.css'

import { useDispatch } from 'react-redux'

// Componentes
import Presentation from './Presentation'
import Mode from './Mode'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({
      type: "SET_STATE_MENU",
      state: false,
    });
    dispatch({
      type: 'SET_NAVIGATION_ACTIVE',
      active: 'home'
    })
  }, [])
  return (
    <div className="home">
      <Presentation />
      <Mode />
    </div>
  )
}

export default Home
