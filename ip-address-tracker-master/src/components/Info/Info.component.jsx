import React, { useContext , useState } from 'react'
import axios from 'axios'
import { InfoContainer, InfoDetails, InfoHeading } from './Info.styles'
import { IpContext } from '../context/IpData.context'
const Info = () => {

    
    const { ip , isLoading } = useContext(IpContext)
    console.log(ip)


    return (
        
        <>
        {isLoading ?(<h1>Loading ...</h1>) :(
        
                <InfoContainer>
                    <InfoDetails>
                        <InfoHeading>
                            IP ADDRESS
                        </InfoHeading>

                        <h4>
                            {ip?.data.ip}
                        </h4>
                    </InfoDetails>

                    <InfoDetails>
                        <InfoHeading>
                            location
                        </InfoHeading>

                        <h4>
                            {ip?.data.location.region}
                        </h4>
                    </InfoDetails>
                    <InfoDetails>
                        <InfoHeading>
                            timezone
                        </InfoHeading>
                        <h4>
                            {ip.data?.location.timezone}
                        </h4>

                    </InfoDetails>
                    <InfoDetails>
                        <InfoHeading>
                            isp
                        </InfoHeading>

                        <h4>
                            {ip?.data.isp}
                        </h4>
                    </InfoDetails>
                </InfoContainer>
       
          
        )
        }
        </>
    )
}

export default Info