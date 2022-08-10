import React from 'react'
import { CountryData, CountryDataHeading , CountryFlag } from './country.styles'
import { Link , useParams} from 'react-router-dom'

const CountryCard = ({details}) => {
    return(

<>    
        
     
            <CountryData>
            <Link to={`/name/:${details.name.common}`}>

         
                {/* {console.log(details)} */}
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




     </Link>

            </CountryData>
        </>
    )
}

export default CountryCard