import React from 'react'
import { JobContainer, JobDetails, JobImage, JobDetailsBody, JobDetailsHeader, JobDetailsFooter, LanguageDetails, Language} from './JobCard.styles'
import data from '../../data.json'
console.log(data)


const JobCard = () => {
  return (
    <div>{data.map((d) =>(<JobContainer key={d.id}>
    <JobDetails>

            
                <JobImage>
                    <img src={d?.logo} alt={d.company} />
                </JobImage>
            <JobDetailsBody>
                <JobDetailsHeader >
                    <h3>
                        {d.company}
                    </h3>
                    <h3>
                        {d.new === true ? 'New' : ''}
                    </h3>
                    <h3>
                        {d.featured === true ? 'featured' : ''}
                    </h3>
                </JobDetailsHeader>
                <div>
                    {d.position}
                </div>
                <JobDetailsFooter>
                        <li>{d.postedAt}</li>
                        <li>{d.contract}</li>
                        <li>{d.location}</li>
                    </JobDetailsFooter>

                
            </JobDetailsBody>

    </JobDetails>

  <LanguageDetails>
    {d.languages.map((language) => <Language key={language}>{language}</Language>)}
  </LanguageDetails>


    </JobContainer>))}</div>
  )
}

export default JobCard