import React from 'react'
import { CountryContainer } from './CountryData.styles'
import CountryCard from '../CountryCard/CountryCard.component'
import {Link, useParams} from 'react-router-dom'

const CountryData = ({countryDetails}) => {
  // console.log(countryDetails)
  return (
   <CountryContainer >

{
  countryDetails?.map((data) =>(
  
      <CountryCard key={data.flag} details={data} />


  )

  )
   }

   </CountryContainer>
    
    
  )
} 

export default CountryData