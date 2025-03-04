
import { createContext,useState } from "react"

const UserContext2 = createContext();

const UserProvider = ({children})=>{

    const [isAuth,setIsAuth] = useState(false)

    const [user,setUser] = useState(null)

    const login = () =>{
        setIsAuth(true)
        setUser({name:'hasnain',email:'hasnainmuneer@gmail.com'})
    }
    const logout = () =>{
        setIsAuth(false)
        setUser(null)
    }
    return(<>
    <UserContext2.Provider value={{isAuth,user,login,logout}}>
    {children}
    </UserContext2.Provider>
        </>)
}

    
export default UserProvider
export {UserContext2}



