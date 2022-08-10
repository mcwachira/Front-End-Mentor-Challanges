import React, { useState, useEffect } from 'react'
import Search from '../../components/search/Search.component'
import { BsSearch } from "react-icons/bs";
import CountryData from '../../components/CountryContainer/CountryData.component.';

const HomePage = () => {


    const [isLoading, setIsLoading] = useState(true);
    const [collection, setCollection] = useState([]);
    const [searchText, setSearchText] = useState("")


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all').then((response) => response.json()).then((response) => {

            setCollection(response)
            setIsLoading(false)
        }

        ).catch(error => alert(error.msg))
    }, [])


    const HandleChange = (e) => (setSearchText(e.target.value))

    const FilteredCountry = collection.filter((countries) => (countries.name.common.toLowerCase().includes(searchText.toLowerCase())))



    return (
        <>
            {isLoading ? <div> Loading ... </div > : <div>


                <div className="main">

                    <div className="input">
                        <Search handleChange={HandleChange} icon={<BsSearch />} />
                    </div>
                </div>


                <CountryData countryDetails={FilteredCountry} />
                {/* {console.log(FilteredCountry)} */}

            </div>
            }

        </>

    )
}

export default HomePage
