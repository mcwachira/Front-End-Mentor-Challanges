import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const IpContext = createContext({
    ip: {},
    setIp: () => { },
    isLoading:true,
    setIsLoading:() => {},
})


export const IpProvider = ({ children }) => {

    const [ip, setIp] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
  
        const getIPData = async () => {

            const results = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_3e6CAMFZmG793uryze7RNNheb4bj3`)
          
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
    const value = { ip, setIp ,isLoading, setIsLoading }

    return <IpContext.Provider value={value}>{children}</IpContext.Provider>

}