import {UserContext2}  from "./ContextAPi/usercontext"
import { useContext } from "react"


const Authentication = () =>{

    const {isAuth,user,login,logout} = useContext(UserContext2);
    
    return(<>
    <h1>You can Enter your Credientail here</h1>
    
    <button onClick={logout}>Logout me</button>
    <button onClick={login}>Login</button>;
    </>)
}

export default Authentication