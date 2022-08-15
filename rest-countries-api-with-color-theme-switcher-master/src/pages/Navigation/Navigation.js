import React, {useContext} from 'react'
import {Link, Outlet} from 'react-router-dom'
import { NavigationComponent, NavLink, NavIconButtons } from './Navigation.styles'
import { ThemeContext } from '../../context/theme.context'
import { FaSun, FaMoon } from 'react-icons/fa'


const Navigation = ({toggleTheme}) => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <NavigationComponent>

        <NavLink to='/'>Where in the world</NavLink>

        <NavIconButtons onClick={toggleTheme}>{theme !== 'dark' ?( <FaSun size={30}/>)  : (<FaMoon size={30}/>)}</NavIconButtons>

      </NavigationComponent>

      {/*  outlet for persisting navigation bar*/}
      <Outlet />
    </>
 
  )
}

export default Navigation