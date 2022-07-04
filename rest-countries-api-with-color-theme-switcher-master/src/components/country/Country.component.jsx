import React from 'react'
import { CountryData, CountryDataHeading , CountryFlag } from './country.styles'

const Country = ({details}) => {
    return(

<>    
        
     
     
     {console.log(details)}

                <CountryData>
                {console.log(details.population)}
                <CountryFlag src={details.flags.png} alt={details.name.common}/>
                <CountryDataHeading>
{details.name.common}
                </CountryDataHeading> 
                <p>
                    population:{details.population}
                </p>
                <p>
                    Region:{details.region}
                </p>

                <p>
                    Capital:{details.capital}
                </p>



                    </CountryData>

     
  
        </>
    )
}

export default Country