import React from 'react'
import { JobContainer } from './JobCard.styles'
import data from '../../data.json'
console.log(data)


const JobCard = () => {
  return (
    <div>{data.map((d) =>(<JobContainer key={d.id}>

    <div>
<div>
                <img src={d?.logo} alt={d.company} />
</div>
<div>
    <h3>
        {d.company}
    </h3>
    <h3>
                    {d.new === true ? 'New' : ''}
    </h3>
    <h3>
                    {d.featured === true ? 'featured' : ''}
    </h3>
</div>
<div>
    {d.position}
</div>
<div>
<ul>
    <li>{d.postedAt}</li>
    <li>{d.contract}</li>
    <li>{d.location}</li>
</ul>

</div>
    </div>
  


    </JobContainer>))}</div>
  )
}

export default JobCard