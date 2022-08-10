import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const IpContext = createContext({
    ip: {},
    setIp: () => { }
})


export const IpProvider = ({ children }) => {

    const [ip, setIp] = useState({})

    useEffect(() => {
        const getIPData = async() => {

            const results = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_3e6CAMFZmG793uryze7RNNheb4bj3`)
      setIp(results)
}
getIPData()

    }, [])
    const value = {ip,setIp }

    return <IpContext.Provider value={value}>{children}</IpContext.Provider>

}