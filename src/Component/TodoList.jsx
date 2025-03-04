import { useState } from "react"

const TodoList = () => {

    const [task,setTask] = useState('')
    const [data,setData] = useState([])

    const handleChange = (e)=>{
       setTask(e.target.value)
       console.log(task);
       
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(task.trim()){
            setData([...data,{id:Date.now(),name:task,completed:false}])
            setTask('')
        }
      console.log(data)

    }

  const toggleBtn = (id) => {
  setData(data.map((t) => t.id === id ? { ...t, completed: !t.completed } : t));
};

  

    return(<>
    <h1>To do List</h1>
    <form onSubmit={handleSubmit} >
     <label>
        Enter Your Future of Today
        <input type="text" value={task} onChange={handleChange}></input>
    </label>
    <button type="submit">Add Now</button>
    </form>

    <h2>Your Today List</h2>
   <ul>
    {
        data.map((t)=>{
            return(<>
            <li style={{textDecoration : t.completed ? 'line-through' : 'none'}}
             key={t.id}>{t.name}</li>
            <button onClick={()=>toggleBtn(t.id)}>
                {
                    t.completed ? 'undo' : 'completed'
                }
            </button>
            </>)
        })    
    }
   </ul>


    </>)
}


export default TodoList