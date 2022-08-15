import React from 'react'

import {AiOutlineArrowLeft} from 'react-icons/ai'
import { 
  CountryData,  
  CountryDetails,
   ImageContainer,
    ImageData, BackLink, 
  CountryDataContainer, Details, ExtraDetails, MajorDetails, CountryBorders,  BordersBox
} from './Country.styles'

const Country = ({ countryData }) => {

    const {name, tld, capital, region, subregion,languages, population,currencies, flags,borders} = countryData

    // console.log(languages)
    // console.log(currencies)
    // console.log(borders)
    return (


<CountryData>

            <BackLink to='/'> <AiOutlineArrowLeft/>  back</BackLink>



<CountryDataContainer>

<ImageContainer>
            <ImageData src={flags.png} alt={countryData.name} />
</ImageContainer>
          

<CountryDetails>
            <h1>
              {name}
            </h1>
            <Details>

            
              <MajorDetails>

        

                <div>
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

                </MajorDetails>
              <ExtraDetails>
                <p>
                  Top Level Domain: {tld}
                </p>
                <p>
                  currencies :{currencies[0].name}
                </p>
                <p>
                  Languages :{languages[0].name}
                </p>
                <p>
                  Capital {capital}
                </p>

              </ExtraDetails>
              </Details>


 
          <CountryBorders>
                Border Countries : {borders?.map((b, index) => <BordersBox key={index}> {b}</BordersBox>)}
              </CountryBorders>
          </CountryDetails>

          
</CountryDataContainer>
         
</CountryData>

    )
    


    
}
export default Country