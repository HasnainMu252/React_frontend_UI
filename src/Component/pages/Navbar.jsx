import { NavLink } from "react-router-dom"


import './Navbar.css'


const NavBar = ()=>{
    return(<>
    <h2>This NavBar Screen</h2>
    <ul id="upperul" >
        <li>
            <NavLink to='/' >Home</NavLink>
        </li>
        <li>
            <NavLink to='/about' >About</NavLink>
        </li>
        <li>
            <NavLink to='/dashboard' >Dashboard</NavLink>
        </li>
    </ul>
    </>)
}

export default NavBar