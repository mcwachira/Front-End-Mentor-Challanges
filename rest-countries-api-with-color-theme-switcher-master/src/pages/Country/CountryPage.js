import React ,{useState, useEffect} from 'react'
import Country from '../../components/Country/Country.component';
import {Link, useParams} from 'react-router-dom'
import { CountryPageContainer } from './CountryPage.styles'

const CountryPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [country, setCountry] = useState([]);

    const {countryId} = useParams()
    const countryName = countryId.split(":")[1]


    useEffect(() => {
      fetch(`https://restcountries.com/v2/name/${countryName}`).then((response) => response.json()).then((response) => {

 
            setCountry(response)
            setIsLoading(false)
        }

        ).catch(error => alert(error.msg))
    }, [countryName])
  return (
      <CountryPageContainer>

{country.map((data) => (<Country key={data.name} countryData={data} />) )}


</CountryPageContainer>


  )
}

export default CountryPage