import React, { useContext, useState } from 'react';
import { UserContext2 } from './ContextAPi/usercontext';
import Timer from './Timer';

const UserProfile = () => {
  const { isAuth, user } = useContext(UserContext2);
  const[data, setData] = useState(
    {
      name: '',
      email: ''
    }
  )

  const handleChange = (e)=>{
    const {name,value} = e.target
    setData({...data,[name]:value})
  }


  if (!isAuth) {
    return <p>Please log in.</p>;
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(data.name == user.name && data.email == user.email){
    console.log('your are pass');
    
      
    }else{
      console.log('your are fail');
      
    }
    
  }


  return (
    <div>
      <h2>User Profile</h2>
      <form id='form' onSubmit={handleSubmit}> 

        <p>Name:</p>
        <input name='name' value={data.name} onChange={handleChange} type='text' />
        <p>Email:</p>
        <input name='email' value={data.email} onChange={handleChange} type='text' />
        <button type='submit'>submit me</button>
      </form>
    </div>
  );
};

export default UserProfile;
