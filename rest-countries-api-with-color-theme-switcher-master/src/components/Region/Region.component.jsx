import React, { useState , useContext } from 'react'
import { DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem } from './Region.styles.js'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { CountriesContext } from '../../context/countryContext.js'

const SelectRegion = () => {
  const options = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
 

  const { onOptionsClicked,  isOpen, setIsOpen} = useContext(CountriesContext)
  const toggle = () => setIsOpen(!isOpen)


  // setIsOpen(false);
  return (


   <DropDownContainer>
   <DropDownHeader onClick={toggle}>
        Filter By Region <span>
          <RiArrowDropDownLine size={50} />
        </span>
   </DropDownHeader>

{isOpen &&(
        <DropDownListContainer>
          <DropDownList>
{options.map((option) =>(  <ListItem onClick={onOptionsClicked(option)} key={Math.random()}> {option}</ListItem>))}
          </DropDownList>
        </DropDownListContainer>


)}
    </DropDownContainer>
  )
}

export default SelectRegion