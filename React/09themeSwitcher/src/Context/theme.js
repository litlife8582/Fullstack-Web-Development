import { createContext,useContext } from "react";

export const ThemeContext=createContext({
    themeMode:"light",//varible making default value of theme
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}//We can just import useTheme instead of importing ThemeContext and useContext seperately