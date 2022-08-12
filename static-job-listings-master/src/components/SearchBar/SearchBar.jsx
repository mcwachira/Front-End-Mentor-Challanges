import React, {useContext} from 'react'
import { JobContext } from '../../context/JobContext'
import { SearchContainer } from './SearchBar.styles'
const SearchBar = () => {

    const {inputChange} = useContext(JobContext)
console.log(inputChange)

  return (
      <SearchContainer >
      {inputChange.map((value => <button>{value}</button>))}

      </SearchContainer>
  )
}

export default SearchBar