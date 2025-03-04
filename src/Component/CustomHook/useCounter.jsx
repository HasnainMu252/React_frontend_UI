import { useState } from "react"

const useCounter = (init) =>{

    const [count,setCount] = useState(init)



    const Increment = ()=>{
        setCount((prv)=>prv+1)
    }

    const Decrement = ()=>{
        setCount((prv)=>prv-1)
    }
    
    const Reset = ()=>{
        setCount(init)
    }


    return{Reset,Increment,Decrement,init,count}
}

export default useCounter