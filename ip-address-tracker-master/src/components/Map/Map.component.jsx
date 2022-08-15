import React , {useContext} from 'react'
import { MapBox } from './Map.styles'
import { IpContext } from '../context/IpData.context'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {Icon} from 'leaflet'
import ChangeMapView from './ChangeMapView'


const locationIcon = new Icon({
    iconUrl:'../../images/icon-location.svg',
    iconSize:[25,25]
})
const Map = () => {
    const {ip , isLoading} = useContext(IpContext)

 let position = []
 if(isLoading === false){
     console.log([ip.data.location.lat, ip?.data.location.lng])
 position=[ip.data.location.lat, ip.data.location.lng]
 }

   
  return (
    <>
          {isLoading ? (<h1> Loading ...</h1 >) : (
              <MapBox>
                  {console.log(ip.data.location.lat, ip.data.location.lng )}
                  <MapContainer center={[ip.data.location.lat, ip.data.location.lng]} zoom={12} scrollWheelZoom={false}>
                      <TileLayer
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      />
                      <Marker position={[ip.data.location.lat, ip.data.location.lng]}>

                          <Popup>



                            <h1>
                                Nairobi
                            </h1>
                     
                          </Popup>
                      </Marker>

                      <ChangeMapView coords={position}/>
                  </MapContainer>
              </MapBox>
          )
          }

    </>
  
      
  )
}

export default Map