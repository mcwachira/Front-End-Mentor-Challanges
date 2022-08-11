import { useEffect, useState } from "react";


//custom hooke
export default () => {
    const [theme, setTheme] = useState('light')

    //function to toggle between  dark and light theme
    const toggleTheme = () => {

        if(theme === 'light'){
            window.localStorage.setItem('theme', 'dark')
            setTheme('dark')
        }else{
            window.localStorage.setItem('theme', 'light')
            setTheme('light')
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('component/theme')
        if(localTheme){
            setTheme(localTheme)
        }
    }, [])
    return [theme, toggleTheme]
}