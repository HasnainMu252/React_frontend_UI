import { useState } from "react"

const Form=()=>{
    const [formData,setFormData] = useState(
       { name:'',
        last:'',
        University:'',
        Registration:''
        }
    )
   
    const handleChange = (e) =>{
        const{name,value} = e.target
        setFormData({...formData,[name]:value})
    }
   
    const HandleSubmit = (e)=>{
        e.preventDefault()
       console.log(...formData)
       
    }

    return(<>
    
    <form on onSubmit={HandleSubmit}>
        <label>
            Enter your name: 
            <input type="text" name="name" value={formData.name} onChange={handleChange}></input>
        </label>
        <label>
            Enter your Last: 
            <input type="text" name="last" value={formData.last} onChange={handleChange}></input>
        </label>
        <label>
            Enter your University: 
            <input type="text" name="University" value={formData.University} onChange={handleChange}></input>
        </label>
        <label>
            Enter your Registration no: 
            <input type="number" name="Registration" value={formData.Registration} onChange={handleChange}></input>
        </label>
        <button type="submit" >Submit now</button>
    </form>

    <text>The name is {formData.name} and father name is {formData.last} and University is {formData.University} and Registration no is {formData.Registration}</text>
    </>)
}

export default Form