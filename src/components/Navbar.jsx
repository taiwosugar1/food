import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='navbar'>
        <nav>
            <div className="logo">
                <h2>Kocina</h2>
            </div>
            <ul>
            <span><li style={{color: "red"}}>Home</li></span>
            
            {/* <Link to='/recipe'>
            <li>Recipe</li>
            </Link> */}
                
            <Link to='/contact'>
            <li>Contact</li>
            </Link>

            <Link to='/food'>
            <li>Foods</li>
            </Link>

            <Link to='/user'>
            <li>User</li>
            </Link>
            </ul>
            <div className="signup">

                <Link to="/signin">
                 <span>signin</span>
                 </Link>
                 
                 <Link to={'/signup'}>
                <span style={{color: "white", background: "red", borderRadius: "40px", listStyle:"none", display:"flex", alignItems:"center"}}>signup</span>
                </Link>
               


            </div>
        </nav>
    </div>
  )
}

export default navbar