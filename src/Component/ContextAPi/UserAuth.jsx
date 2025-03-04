import { createContext, useState } from "react"



    const ContextAuth = createContext()

    const AuthProvider = ({children}) =>{
        const [Auth,setAuth ] = useState(false)

        const[userData,setUserData] = useState({
            fname:'',
            lname:'',
            username:'',
            email:'',
            password:''
        })

        const logUp = ()=>{
            setAuth(false)
            setUserData({firstname:userData.fname,lastname:userData,Username:userData.username,Email:userData.email,Password:userData.password})
        }
        const logIn = ()=>{
            setAuth(true)
            setUserData({Username:userData.username,Password:userData.password})
        }

    return(<>
    <ContextAuth.Provider value={{Auth,userData,logUp,logIn}} >
        {children}
    </ContextAuth.Provider>

    </>)
    }



export default AuthProvider
export {ContextAuth}