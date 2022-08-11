import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext({
    theme:"",
    setTheme:() =>{},
    color:"",
    setColor:() => {},
    background:"",
    setBackground:() => {}

})


export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light')
    const [color, setColor] = useState('#000')
    const [background , setBackground] = useState('#FFF')


    const toggleTheme = () => {

        if (theme === 'light') {
            window.localStorage.setItem('theme', 'dark')
            setTheme('dark')
            setBackground('#000')
            setColor('#fff')
        } else {
            window.localStorage.setItem('theme', 'light')
            setTheme('light')
            setBackground('#fff')
            setColor('#000')
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('component/theme')
        if (localTheme) {
            setTheme(localTheme)
        }
    }, [])

    const value = {
        theme, setTheme , toggleTheme , color , background , setBackground , setColor
    }

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}