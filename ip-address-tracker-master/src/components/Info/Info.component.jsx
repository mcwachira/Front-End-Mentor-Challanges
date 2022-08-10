import React, { useContext , useState } from 'react'
import axios from 'axios'
import { InfoContainer, InfoDetails } from './Info.styles'
import { IpContext } from '../context/IpData.context'
const Info = () => {

    
    const { ip , isLoading } = useContext(IpContext)
    console.log(ip)


    return (
        
        <>
        {isLoading ?(<h1>Loading ...</h1>) :(
        
                <InfoContainer>
                    <InfoDetails>
                        <h5>
                            IP ADDRESS
                        </h5>

                        <h3>
                            {ip?.data.ip}
                        </h3>
                    </InfoDetails>

                    <InfoDetails>
                        <h5>
                            location
                        </h5>

                        <h3>
                            {ip?.data.location.region}
                        </h3>
                    </InfoDetails>
                    <InfoDetails>
                        <h5>
                            timezone
                        </h5>
                        <h3>
                            {ip.data?.location.timezone}
                        </h3>

                    </InfoDetails>
                    <InfoDetails>
                        <h5>
                            isp
                        </h5>

                        <h3>
                            {ip?.data.isp}
                        </h3>
                    </InfoDetails>
                </InfoContainer>
       
          
        )
        }
        </>
    )
}

export default Info