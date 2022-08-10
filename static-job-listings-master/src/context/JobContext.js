import { createContext, useState , useEffect } from "react";
import data from '../data.json'

console.log(data)
export const JobContext = createContext({

    jobData:[],
    
    setJobData:() => {},

})

export const JobProvider = ({children}) => {
   
    const [jobData, setJobData] = useState([])

    useEffect(() => {

    }, [])

const value = {
    jobData,
    setJobData
}
    return <JobContext.Provider>{children}</JobContext.Provider>
}