import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const IpContext = createContext({
    ip: {},
    searchTerm:"",
    setIp: () => { },
    isLoading:true,
    setIsLoading:() => {},
    setSearchTerm: () => { },
})


export const IpProvider = ({ children }) => {

    const [ip, setIp] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
  
        const getIPData = async () => {
                console.log(searchTerm)
         
            const results = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_j1QRVM5JRifBXmIEGvbwlJRgzfjbl&ipAddress=${searchTerm}`)
            console.log(results)

                        if(results){
                           console.log(results) 
                            setIsLoading(!isLoading)
                            console.log(isLoading)
                            
               setIp(results)
             
           }
         
        }
        getIPData()

       
    }, [])
    const value = { ip, setIp ,isLoading, setIsLoading ,setSearchTerm, searchTerm}

    return <IpContext.Provider value={value}>{children}</IpContext.Provider>

}