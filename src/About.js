import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'

const About = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'SET_NAVIGATION_ACTIVE',
      active: 'about'
    })
  }, [])
  return (
    <div className="about">
      
    </div>
  )
}

export default About
