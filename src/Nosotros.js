import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'

const Nosotros = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'SET_NAVIGATION_ACTIVE',
      active: 'nosotros'
    })
  }, [])
  return (
    <div className="nosotros">
      
    </div>
  )
}

export default Nosotros
