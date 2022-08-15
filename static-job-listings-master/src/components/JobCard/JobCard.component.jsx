import React, { useContext , useEffect , useState} from 'react'
import { JobContainer, JobDetails, JobImage, JobDetailsBody, JobDetailsHeader, JobDetailsFooter, LanguageDetails, Language } from './JobCard.styles'
import SearchBar from '../SearchBar/SearchBar'
import data from '../../data.json'
import { JobContext } from '../../context/JobContext'

console.log(data)


const JobCard = () => {
  const [filteredJobs, setFilteredJobs] = useState([])

  const {  setInputChange , inputChange, jobData , setJobData} = useContext(JobContext)
  const addToSearch = (value) => {
    // console.log(value)

    setInputChange((inputChange) => [
      ...inputChange,
      value
    ])

    if(jobData.length > 0){
      setFilteredJobs(() => jobData.map((dt) => {
        return dt.languages.filter((lang) => lang === value) 
      })
      )
          
       console.log(filteredJobs)
//  setJobData((jobData) => [
//       ...jobData,
//        newJob
//     ])
    }
    // console.log(value)
    // const newJob = jobData?.filter(obj =>{return  obj.languages === value}) 
    // console.log(newJob.languages)

   
  }

  console.log(inputChange)
  return (
    <div>{jobData?.map((d) =>(<JobContainer key={d.id}>
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
    {d.languages.map((language) => <Language onClick={() => addToSearch(language)} key={language}>{language}</Language>)}
  </LanguageDetails>


    </JobContainer>))}</div>
  )
}

export default JobCard