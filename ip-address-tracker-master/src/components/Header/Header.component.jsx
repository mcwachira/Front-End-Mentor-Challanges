import React from 'react'
import {HeaderBg , SearchContainer} from './Header.styles'
import Search from '../Search/Search.component'
import Info from '../Info/Info.component'

const Header = () => {
  return (
    <>


   <HeaderBg>
   <SearchContainer>

   <h2>
    Ip Address  Tracker
   </h2>
              <Search />
   </SearchContainer>

   </HeaderBg>
   <Info/>

      </>
  )
}

export default Header