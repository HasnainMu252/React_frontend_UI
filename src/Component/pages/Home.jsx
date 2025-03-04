import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import useCounter from "../CustomHook/useCounter";

const Home = ()=>{
    const {id} = useParams()
    const [Count ,setCount] =  useState(Number(id) || 0)
    const {Increment,Decrement,Reset,count} = useCounter(5)



    const navigate = useNavigate();
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };



    const handleClick = ()=>{
        navigate('/about')
    }
    return(<>
    <h2 >This home Screen the id : {id} the count : {Count}
    <button onClick={handleIncrement}>Increment Count</button>
        <button onClick={handleClick}>Move to Next</button>
    </h2>
        <h1>The Second Counter</h1>
        <h3>The Counter is : {count}</h3>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>REset</button>
    </>)
}

export default Home