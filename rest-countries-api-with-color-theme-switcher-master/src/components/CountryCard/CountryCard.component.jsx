import React, { useContext } from 'react'
import { ThemeContext } from '../../context/theme.context'
import { CountryData, CountryDataHeading , CountryFlag } from './country.styles'
import { Link , useParams} from 'react-router-dom'

const CountryCard = ({details}) => {
    const { color, background } = useContext(ThemeContext)
    // console.log(details)
    return(

<>    
        
     
            <CountryData style={{
                background: `${background}`,
                color: `${color}`,
            }}>
            <Link to={`/name/:${details.name}`}>

         
                {/* {console.log(details)} */}
                <CountryFlag src={details.flags.png} alt={details.name.common}/>
                <CountryDataHeading>
{details.name}
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