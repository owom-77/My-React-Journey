import {createContext,useContext} from 'react'

export const ThemeContext = createContext({
    mode : 'light',
    darkMode : ()=>{},
    lightMode : ()=>{}
})

export const ThemeContextProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext)
}




