import React, {useContext} from 'react'
import { ThemeContext } from '../../context/theme.context'
import { SearchInput } from './Search.styles'
import { CountriesContext } from '../../context/countryContext'

const Search= ({handleChange}) => {

  const { color, background } = useContext(ThemeContext)
  const { HandleChange } = useContext(CountriesContext)


  return (
    <div ><SearchInput style={{
      background: `${background}`,
      color: `${color}`,
    }} placeholder=' Search for a country ... ' onChange={(e) => (HandleChange(e)) } />  </div>
  )
}

export default Search