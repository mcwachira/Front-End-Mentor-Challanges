import React , {useState, useEffect, useContext} from 'react'
import { SearchInput,SearchButton } from './Search.styles'
import { IpContext} from '../context/IpData.context'
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
      <SearchInput placeholder='search for ip' value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
      <SearchButton onClick = {handleClick}/>
    </>
 
  )
}


export default Search