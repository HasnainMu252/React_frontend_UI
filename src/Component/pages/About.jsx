import { useNavigate } from "react-router-dom"
import NavBar from "./Navbar"
import { useState } from "react"
import './About.css'

const About = ()=>{

    const[data,setData ] = useState([])

    const [task,setTask] = useState('')


    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate('/dashboard')
    }
    const handleTask = ()=>{
       if(task.trim !== ''){
        setData([...data,task])
        console.log(data,task)
        setTask('')
       }
    }


    const handleDelete = (index) => {
        const updatedData = data.filter((_, i) => i !== index); // Remove the item at index
        setData(updatedData);
      };
    const handleUpdate = (index)=>{
        const updateTask = prompt("enter the task . ",data[index])
       if(updateTask){
        const updateData = data.map((item,i)=>(i === index ? updateTask : item))
        setData(updateData)
       }
    }
    return(<>
    <h2>This About Screen</h2>
    <button onClick={handleClick}>move to next</button>
    <h1>Enter Your Task here</h1>
    <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder="Enter your Task"></input>
    <button onClick={handleTask}>Add now</button>

        <ul id="upperUl">
            {
                data.map((item,index)=>(
                    <li id="lowerLi" key={index} >{item} {index}
                    <div id="start">

                    <button id="btn" onClick={()=>handleUpdate(index)}>update</button>
                    </div>
                    <div id="end">

                    <button id="btn" onClick={()=>handleDelete(index)}>Delete</button>
                    </div>
                    </li>
                ))
            }
        </ul>
    </>)
}

export default About