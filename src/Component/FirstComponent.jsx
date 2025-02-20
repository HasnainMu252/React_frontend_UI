import { useState } from "react"
import SecondComponent from "./SecondComponent"

const FirstComponent =({init})=>{

    const [count,setCount] = useState(init)
    
    return(<>
    <h3>This Our First Counter </h3>
    <h2>Counter No # {count}</h2>
    <button  onClick={()=>{setCount(count+1)}}>Clicker</button>
    <button  onClick={()=>{setCount(count-1)}}>Don't Click</button>

    </>)
}


export default FirstComponent