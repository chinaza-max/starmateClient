import React, {useContext,useState}  from 'react'

const ThemeContext=React.createContext()
const ThemeContextUpdate=React.createContext()


export function useTheme(){
    return  useContext(ThemeContext)
}
export function useThemeUpdate(){
    return  useContext(ThemeContextUpdate)
}

export function ThemeProvider({children}) {
 const [darkTheme ,setdarkTheme]=useState(false)

 function toggler(){
  setdarkTheme(!darkTheme)
 }


  return (
    <ThemeContext.Provider value={darkTheme}>
        <ThemeContextUpdate.Provider value={toggler}>
            {children}
        </ThemeContextUpdate.Provider>
    </ThemeContext.Provider>
  );
}


