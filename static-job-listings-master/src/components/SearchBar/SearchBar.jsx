import React, {useContext} from 'react'
import { JobContext } from '../../context/JobContext'
import { SearchContainer , SearchValue ,ClearSearchButton } from './SearchBar.styles'
import { MdDeleteForever } from 'react-icons/md'
const SearchBar = () => {

    const {inputChange, setInputChange} = useContext(JobContext)
// console.log(inputChange)

const removeFromSearch  =(value) => {
    console.log(value)
    let newArray = inputChange
    console.log(newArray)
    setInputChange(() => newArray.filter((item) => item !== value))
  
}
const clearSearch = () => {
setInputChange(() => [])
console.log('clear')
}

  return (
      <SearchContainer >
          {inputChange.map((value => <SearchValue key={ Math.random() }>{value} <MdDeleteForever size={20} onClick={ () => removeFromSearch(value)}/></SearchValue>))}

<ClearSearchButton onClick={clearSearch}>Clear</ClearSearchButton>
      </SearchContainer>
  )
}

export default SearchBar