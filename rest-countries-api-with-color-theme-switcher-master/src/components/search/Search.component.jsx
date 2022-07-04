import React from 'react'
import { SearchInput } from './Search.styles'





const Search= ({handleChange}) => {



  return (
      <div><SearchInput placeholder=' Search for a country ... ' onChange={handleChange } />  </div>
  )
}

export default Search