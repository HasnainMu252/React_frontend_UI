import { useState } from "react"

const ChangeColor =()=>{
    const colors = [
      "red",
       "black",
       "yellow",
       "pink"
    ];

    const [index,setindex] = useState(0)

const ChangeIndex=()=>{
    setindex((preindex)=>(preindex+1) % colors.length)  //%colors.lenght it ensure the when it come to end then it will resent the value to zero immediately
}


 return(<>
    <h2 style={{color:colors[index]}}> I can Change the Color</h2>
<button onClick={ChangeIndex}>Click me for Change</button>
    </>)
}

export default ChangeColor