import React from 'react'
import {Link} from 'react-router-dom'
import { NavigationComponent, NavLink} from './Navigation.styles'

const Navigation = () => {
  return (
   <NavigationComponent>
    
    <NavLink to='/'>Where in the world</NavLink>

    <button>dark mode</button>
   </NavigationComponent>
  )
}

export default Navigation