
// import { Link } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import './Signin.css';
import { useState } from 'react';
import axios from 'axios';

const  Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

//   let data ={email, password}

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
      const res = await axios.get(`http:localhost:3000/User?email=${email}`)
      const user = res.data[0]
      if(user && user.password ===password){
        alert('Authentication successful')
        navigate('/')
      }else{
        alert('invalid details')

      }
    }catch(err){
      console.log("Login failed due to" + err.message);
    }
  }


  
  return (
    <div className='login'>
     
      <div className="card">
        <div className="left">
            <h1>Hello Foodie</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ut quos maiores? Voluptate hic ut minima. Id vel alias laudantium!
            </p>
            <span>Dont you have an account?</span>
            <Link to="/signup">
            <button>Register</button>
            </Link>
        </div>
        <div className="right">
            <h1>Signin</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} required />

                <Link to="/">
                <button>Signin</button>
                </Link>
                
            </form>
        </div>
      </div>
      
    </div>
  )
}

export default Signin;
