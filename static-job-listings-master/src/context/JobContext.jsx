import { createContext, useState , useEffect } from "react";
import data from '../data.json'

console.log(data)
export const JobContext = createContext({

    jobData:[],
    
    setJobData:() => {},
    
    inputChange:[],
    setInputChange: () => { },

    addToSearch:() => {}
})

export const JobProvider = ({children}) => {
   
    const [jobData, setJobData] = useState([])
    const [inputChange, setInputChange]= useState([])


    useEffect(() => {
            setJobData(() => data)



    }, [])
    console.log(inputChange)
const value = {
    jobData,
    setJobData,
    inputChange,
    setInputChange,
    // addToSearch,
 
}
    return <JobContext.Provider value={value}>{children}</JobContext.Provider>
}