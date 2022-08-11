import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { CountryData, CountryFlag , ImageContainer } from './Country.styles'

const Country = ({ countryData }) => {

    const {name, tld, capital, region, subregion,languages, population,currencies, flags,borders} = countryData

    // console.log(languages)
    // console.log(currencies)
    // console.log(borders)
    return (


<CountryData>

            <Link to='/'> <AiOutlineArrowLeft/>  back</Link>


          <ImageContainer src={flags.png} alt={countryData.name} styles={{
            width:" 10px" ,
            height: "10px" ,
}} />


    <div>
        <h1>
                    {name}
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

        <div>
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

        </div>

        <div>
          Border Countries : {borders?.map((b , index) => <span key={index}> {b}</span>)}
        </div>
    </div>
</CountryData>

    )
    


    
}
export default Country