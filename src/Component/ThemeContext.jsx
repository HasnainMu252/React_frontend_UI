import { createContext, useState } from "react"
// creeate context
export const ThemeContext = createContext()

// 
export const ThemeProvider2 = ({children}) =>{
  

  const names = 'hasnainmuinir54914'



    return(<>
    
    <ThemeContext.Provider value={{names}}>
        {children}
    </ThemeContext.Provider>
    
    
    </>)
}