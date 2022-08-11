import React, {useContext } from 'react'
import Search from '../../components/search/Search.component'
import { BsSearch } from "react-icons/bs";
import CountryData from '../../components/CountryContainer/CountryData.component.';
import { Main } from './Home.styles';
import SelectRegion from '../../components/Region/Region.component';
import { CountriesContext } from '../../context/countryContext';
const HomePage = () => {

const {isLoading} = useContext(CountriesContext)

    return (
        <>
            {isLoading ? <div> Loading ... </div > : <div>


                <Main>

                    <div className="input">
                        <Search icon={<BsSearch />} />
                    </div>
                    <SelectRegion/>
                </Main>


                <CountryData/>
                {/* {console.log(FilteredCountry)} */}

            </div>
            }

        </>

    )
}

export default HomePage
