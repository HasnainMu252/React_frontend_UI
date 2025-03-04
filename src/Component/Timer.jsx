import { useEffect, useState } from "react"

const Timer = () =>{
    const [count,setCount] = useState(0)

    useEffect(()=>{
        const timer = setInterval(()=>{
            setCount((prev)=>prev+1)

        },1000);

        return ()=> clearInterval(timer)
    },[])


    return(<>

    <h2>{count}</h2>
    
    
    </>)
}
    
export default Timer