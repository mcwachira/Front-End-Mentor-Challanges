import React from 'react'
import HomePage from './pages/Home/HomePage'
import Navigation from './pages/Navigation/Navigation'
import CountryPage from './pages/Country/CountryPage'
import {Routes, Route} from 'react-router-dom'

const App = () => (
  


  <main>
    <Routes>
      {/* <Route path="/" element={<Navigation />}> */}
        <Route path='/' index={true} element={<HomePage />} />
        <Route path='/name/:countryId' element={<CountryPage/>} />

      {/* </Route> */}
    </Routes>
  

  </main>



)
export default App