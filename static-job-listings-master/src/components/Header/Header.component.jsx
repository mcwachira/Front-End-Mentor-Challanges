import React from 'react'
import { HeaderContainer , HeaderBody } from './Header.styles'
import bgImage from '../../images/bg-header-desktop.svg'
import JobCard from '../JobCard/JobCard.component'
import SearchBar from '../SearchBar/SearchBar'
const Header = () => {
  return (
    <>
          <HeaderContainer>
              <img src={bgImage} alt="background" style={{ width: '100%', height: "15vh" }} />
        <SearchBar  />
          </HeaderContainer>

          <HeaderBody>

            <JobCard/>
          </HeaderBody>
    </>
  
        
  
  )
}

export default Header