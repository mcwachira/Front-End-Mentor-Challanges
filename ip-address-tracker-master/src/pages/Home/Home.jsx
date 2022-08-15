import react from 'react'
import Header from '../../components/Header/Header.component'
import Map from '../../components/Map/Map.component'
import { HomeContainer } from './Home.styles'


const Home = ()  => {


    return (
        <HomeContainer>

            <Header />
            <Map />
        </HomeContainer>
    )
}

export default Home
