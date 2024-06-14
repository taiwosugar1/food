// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';

import Food1 from "../Assets/food1.jpg"
import Food2 from "../Assets/food2.jpg"
import Food3 from "../Assets/food3.jpg"
import Food4 from "../Assets/food4.jpg"
import Food5 from "../Assets/food5.jpg"
import "./Detail.css"


const Cards = () => {
  return (
    <div className='main-content'>
     
<hr style={{margin:"40px 0"}}/>

<h1 className='menu-h1'>MENU LISTS</h1>

<div className='menu2'>
  <div className="box-container">

   <h1 className='Center-h1'>Yoruba Foods</h1>
  <div className='Center'>

    <div className='prodParent'>
    

      <Link to={"/profile:id"/{id:1}}>
      <img src={Food1} alt=""  className='box-detail'/>
        <span>Fufu</span>
        </Link>
    </div>

        
    <div >
    <Link to={"/profile:id"/{id:1}}>
      <img src={Food2} alt=""  className='box-detail'/>
        <span>Eba</span>
        </Link>
    </div>
    <div>
    <Link to={"/profile:id"/{id:1}}>
      <img src={Food3} alt=""  className='box-detail'/>
        <span>Amala</span>
        </Link>
    </div>

  </div>
  <hr />

  <h1 className='Center-h1'>Yoruba Soups</h1>
  <div className='Center'>
  
    <div>
    <Link to={"/profile:id"/{id:4}}>
      <img src={Food4} alt=""  className='box-detail'/>
        <span>Egusi Soup</span>
        </Link>
    </div>

        
    <div>
    <Link to={"/profile:id"/{id:5}}>
      <img src={Food2} alt=""  className='box-detail'/>
        <span>Vegitable soup</span>
        </Link>
    </div>
    <div>
    <Link to={"/profile:id"/{id:6}}>
      <img src={Food3} alt=""  className='box-detail'/>
        <span>Okro soup</span>
        </Link>
    </div>
 </div>

<hr />

 <h1 className='Center-h1'>Other meals</h1>
 <div className='Center'>
  
   <div>
   <Link to={"/profile:id"/{id:7}}>
      <img src={Food4} alt=""  className='box-detail'/>
        <span>Orha soup</span>
        </Link>
   </div>
       
   <div>
   <Link to={"/profile:id"/{id:8}}>
      <img src={Food5} alt=""  className='box-detail'/>
        <span>Ogbono soup</span>
        </Link>
   </div>
   <div>
   <Link to={"/profile:id"/{id:9}}>
      <img src={Food4} alt=""  className='box-detail'/>
        <span>Banga soup</span>
        </Link>
   </div>
</div>
</div>
</div>

      


    </div>
  )
}

export default Cards

