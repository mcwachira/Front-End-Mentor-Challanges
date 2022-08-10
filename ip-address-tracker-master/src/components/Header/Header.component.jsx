import React from 'react'
import {HeaderBg , SearchContainer} from './Header.styles'
import Search from '../Search/Search.component'
import Info from '../Info/Info.component'
import Map from '../Map/Map.component'
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

   <Map/>
      </>
  )
}

export default Header