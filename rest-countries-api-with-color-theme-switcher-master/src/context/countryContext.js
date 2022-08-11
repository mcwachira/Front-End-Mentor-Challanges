import { createContext, useState, useEffect } from "react";

export const CountriesContext = createContext({

    isLoading:true,
    setIsLoading:() => {},
    collection:[],
    setCollection:() => {},
    searchText:"",
    setSearchText:() => {},
    region:"",
    setRegion:() => {},
    isOpen:false,
    setIsOpen: () => { },

})



export const CountriesProvider  = ({children}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [collection, setCollection] = useState([]);
    const [searchText, setSearchText] = useState("")
    const [selectedOption, setSelectedOption] = useState('africa')
    const [isOpen, setIsOpen] = useState(false)



    useEffect(() => {
        fetch('https://restcountries.com/v2/all').then((response) => response.json()).then((response) => {

            setCollection(response)

            setIsLoading(false)
        }

        ).catch(error => alert(error.msg))
    }, [])

    useEffect(() => {
        fetch(`https://restcountries.com/v2/region/${selectedOption}`).then((response) => response.json()).then((response) => {

        setCollection(response)

            // setCollection(response)

            // setIsLoading(false)
        }

        ).catch(error => alert(error.msg))
    }, [selectedOption])


 


    

    const HandleChange = (e) => (setSearchText(e.target.value))

    const FilteredCountry = collection?.filter((countries) => (countries.name.toLowerCase().includes(searchText.toLowerCase())))

    const onOptionsClicked = value => () => {
        setSelectedOption(value)
        setIsOpen(!isOpen)
    
    }
const value = {
    isLoading,
    setIsLoading,
    isOpen,
    setIsOpen,
    collection,
    setCollection,
    HandleChange,
    FilteredCountry,
    onOptionsClicked ,

}


    return <CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>
}