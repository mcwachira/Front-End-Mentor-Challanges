import React , {useState, useEffect, useContext} from 'react'
import { SearchInput, SearchButton, searchContainer } from './Search.styles'
import { IpContext} from '../context/IpData.context'
import img from '../../images/icon-arrow.svg'
import axios from 'axios'
const Search = () => {

  
  const {setIp ,setSearchTerm , searchTerm} = useContext(IpContext)

  const handleClick = async () => {
    console.log(searchTerm)
    const results = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_j1QRVM5JRifBXmIEGvbwlJRgzfjbl&ipAddress=${searchTerm}`)
        console.log(results)

    setIp(results)
  
  }
  // console.log(searchTerm)
  useEffect(() => {
   handleClick()
 
  
  },[])


  return (
    <>
      <searchContainer>
        <SearchInput placeholder='search for ip' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        <SearchButton onClick={handleClick}><img src={img} alt='arrow'/> </SearchButton>
      </searchContainer>
     
    </>
 
  )
}


export default Search