import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {products} from "../pages/data/products"
import "./Food.css"
import { FaYoutube } from 'react-icons/fa';





const Food = () => {

  let { Id} = useParams();
  const product = products.find((p)=>p.id === Id);





  return (
    <div className='foodparent'>
     <div style={{display:"flex"}}>
      <Link to='/'>
      <button className='button5'>Home</button>
      </Link>

      <Link to='/Food'>
      <button className='button5'>Food list</button>
      </Link>
     </div>

      <div className="card">
      <img src={product.image} alt="" /> 
      
      <Link to={product.video}>
          <FaYoutube  style={{fontSize:"50px", color:"red", background:"black", borderRadius:"5px"}} />
       </Link>
      <div>
        <h1>
        <span style={{color:"white",background:"black",padding:"3px", fontSize:"20px", borderRadius:"5px"}}>Product Title:</span>{product.title}
        </h1>
        <h3>  <span style={{color:"white",background:"black",padding:"3px", fontSize:"20px", borderRadius:"5px"}}>Description:</span>{product.description}</h3>
        <h3>
        <span style={{color:"white",background:"black",padding:"3px", fontSize:"20px", borderRadius:"5px"}}>Ingredients:</span>{product.ingredients}
        </h3>
        <h4>
        <span style={{color:"white",background:"black",padding:"3px", fontSize:"20px", borderRadius:"5px"}}>Active Time:</span>{product.activeTime}
        </h4>
        <h4>
        <span style={{color:"white",background:"black",padding:"3px", fontSize:"20px", borderRadius:"5px"}}>Total Time:</span>{product.totalTime}
        </h4>
        <h4>
        <span style={{color:"white",background:"black",padding:"3px", fontSize:"20px", borderRadius:"5px"}}>Yield:</span>{product.yield}
        </h4>
        <h4>
        <span style={{color:"white",background:"black",padding:"3px", fontSize:"20px", borderRadius:"5px"}}>Steps:</span>{product.steps}
        </h4>
        <h4>
        <span style={{color:"white",background:"black",padding:"3px", fontSize:"20px", borderRadius:"5px"}}>Ratings:</span>{product.ratings}
        </h4>
      
        

      </div>
      </div>
      
    </div>
  )
}

export default Food

