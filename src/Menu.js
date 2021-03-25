import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'

const Menu = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'SET_NAVIGATION_ACTIVE',
      active: 'menu'
    })
  }, [])
  return (
    <div className="menu">
      
    </div>
  )
}

export default Menu
