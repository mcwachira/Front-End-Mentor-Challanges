import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { CountryData, CountryFlag } from './Country.styles'

const Country = ({ countryData }) => {

    const {name, tld, capital, region, subregion,languages, population,currencies, flags,flag} = countryData

 const image = Object.entries(flags).forEach(item => console.log(item))
 console.log(image)
    return (

<CountryData>

            <Link to='/'> <AiOutlineArrowLeft/>  back</Link>

    <CountryFlag>
        <img src={flag[0].png} alt={countryData.name.common}/>
    </CountryFlag>

    <div>
        <h1>
                    {name.common}
        </h1>

        <div>
            <div>
              {/* <p>
                            Native Name: {name.nativeName.eng}
              </p> */}
              <p>
                Population: {population}
              </p>
              <p>
                Region:{region}
              </p>
              <p>
                SubRegion:{subregion}
              </p>
              <p>
               Capital {capital}
              </p>
            </div>
      
               
      
        </div>
    </div>
</CountryData>

    )
    


    
}
export default Country