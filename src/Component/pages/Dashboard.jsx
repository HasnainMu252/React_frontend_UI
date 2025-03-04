import { useState ,useEffect} from "react"
import { Outlet, useNavigate } from "react-router-dom"
import axios from 'axios'

const Dashboard = () => {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchPost = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            setPost(response.data)
            console.log(response.data)
        } catch (error) {

            setLoading(false)

        }
    }


useEffect(() => {
    fetchPost()
}, [])






const navigate = useNavigate()

const handleClick = () => {
    navigate('/34')
}
return (<>

    <h3>It s Dashboard </h3>
    <button onClick={handleClick}>move to Home</button>
    <Outlet />
  
  {
    post.map((item)=>(<div key={item.id}>
        <h4>The id : {item.id }:  {item.title}</h4>
        <img src={item.image} width={100}/>
        <h3>PKR {item.price}</h3>

    </div>))
  }

</>)
}

export default Dashboard