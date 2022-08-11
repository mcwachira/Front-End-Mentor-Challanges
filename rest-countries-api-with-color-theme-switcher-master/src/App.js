import React , {useContext} from 'react'
import HomePage from './pages/Home/HomePage'
import Navigation from './pages/Navigation/Navigation'
import CountryPage from './pages/Country/CountryPage'
import { ThemeContext } from './context/theme.context'
import {Routes, Route} from 'react-router-dom'


const App = () =>{
  const { toggleTheme , color, background} = useContext(ThemeContext)
  
  
  return (
  


  <main style={{
    background:`${background}`,
    color:`${color}`,
  }}>
    <Routes>
      <Route path="/" element={<Navigation  toggleTheme ={toggleTheme}/>}>
        <Route index={true} element={<HomePage />} />
        <Route path='/name/:countryId' element={<CountryPage/>} />

      </Route>
    </Routes>
  

  </main>



)
}
export default App