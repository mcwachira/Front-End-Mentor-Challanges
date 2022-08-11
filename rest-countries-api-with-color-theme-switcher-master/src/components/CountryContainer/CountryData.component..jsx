import React , {useContext} from 'react'
import { CountryContainer } from './CountryData.styles'
import CountryCard from '../CountryCard/CountryCard.component'
import {Link, useParams} from 'react-router-dom'
import { CountriesContext } from '../../context/countryContext'
const CountryData = () => {
  const { FilteredCountry } = useContext(CountriesContext)
  return (
   <CountryContainer >

{
        FilteredCountry?.map((data) =>(
  
      <CountryCard key={data.flag} details={data} />


  )

  )
   }

   </CountryContainer>
    
    
  )
} 

export default CountryData