import {React , createContext, useState} from "react";

// Create a context
const InfoContext = createContext();

// Create the provider component  its like wear House
const IndexProvider = ({ children }) => {
  const [theme,setTheme] = useState('light')

  const toggleBtn = ()=>{
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <InfoContext.Provider value={{theme,toggleBtn}}>
      {children}
    </InfoContext.Provider>
  );
};

export default IndexProvider;
export { InfoContext };