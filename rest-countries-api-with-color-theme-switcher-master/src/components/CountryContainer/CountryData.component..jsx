import React from 'react'
import { CountryContainer } from './CountryData.styles'
import Country from '../country/Country.component'

const CountryData = ({countryDetails}) => {
  return (
   <CountryContainer>

{countryDetails?.map((data) => <Country key={data.flag}  details={data}/>)}

   </CountryContainer>
    
    
  )
}

export default CountryData