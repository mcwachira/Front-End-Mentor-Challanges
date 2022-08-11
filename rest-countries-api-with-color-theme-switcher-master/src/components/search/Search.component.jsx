import React, {useContext} from 'react'
import { ThemeContext } from '../../context/theme.context'
import { SearchInput } from './Search.styles'


const Search= ({handleChange}) => {

  const { color, background } = useContext(ThemeContext)


  return (
    <div ><SearchInput style={{
      background: `${background}`,
      color: `${color}`,
    }} placeholder=' Search for a country ... ' onChange={handleChange } />  </div>
  )
}

export default Search