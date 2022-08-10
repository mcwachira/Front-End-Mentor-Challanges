import React, {useContext} from 'react'
import axios from 'axios'
import { InfoContainer , InfoDetails} from './Info.styles'
import { IpContext } from '../context/IpData.context'
const Info = () => {

    const {ip} = useContext(IpContext)
    console.log(ip)
  return (
   <InfoContainer>
<InfoDetails>
    <h2>
        IP ADDRESS
    </h2>

    <h3>
        {ip.data.ip}
    </h3>
</InfoDetails>

<InfoDetails>
<h2>
                  location
</h2>
   
   <h3>
    {ip.data.location.region}
   </h3>
</InfoDetails>
<InfoDetails>
<h2>
                  timezone
</h2>
<h3>
                  {ip.data.location.timezone}
</h3>

</InfoDetails>
<InfoDetails>
<h2>
                  isp
</h2>

<h3>
                  {ip.data.isp}
</h3>
</InfoDetails>
   </InfoContainer>
  )
}

export default Info