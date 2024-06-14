import React from 'react'
import { Link } from 'react-router-dom'

import "./FoodList.css"

const FoodList = () => {
  return (
    <div className='foodlist animation'>
      <div className="anim-box">Best Meals</div>
       <Link to='/'>
      <button  className='button5'>Home</button>
      </Link>

      <h1>FOOD LIST</h1>

      <div style={{display:"flex"}}>
       <div className='list'>
       <Link to="/food/0" >
        <img src="https://images.pexels.com/photos/17593641/pexels-photo-17593641/free-photo-of-close-up-of-a-bowl-of-ramen.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <li>Beef Stew</li></Link>
        </div> 

        <div className='list'>
        <Link to="/food/1" >
        <img src="https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
       <li>Macaroni and Cheese</li></Link>
        </div> 

        <div className='list'>
        <Link to="/food/2" >
        <img src= "https://images.pexels.com/photos/4055112/pexels-photo-4055112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       <li>Chicken Pot Pie</li></Link>
        </div> 
      </div>  

      <div style={{display:"flex"}}>

        <div className='list'>
        <Link to="/food/3" >
        <img src= "https://images.pexels.com/photos/6412892/pexels-photo-6412892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <li>Chili Con Carne</li></Link>
        </div> 

        <div className='list'>
        <Link to="/food/4" >
        <img src= "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <li>Shepherd's Pie</li></Link>
        </div> 

        <div className='list'>
        <Link to="/food/5" >
        <img src= "https://images.pexels.com/photos/4079522/pexels-photo-4079522.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <li>Vegetable Lasagna</li></Link>
        </div> 
    </div>  

    <div style={{display:"flex"}}>

        <div className='list'>
        <Link to="/food/6" >
        <img src= "https://images.pexels.com/photos/14613467/pexels-photo-14613467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <li>Classic French Toast</li></Link>
        </div> 

        <div className='list'>
        <Link to="/food/7" >
        <img src=  "https://images.pexels.com/photos/6294360/pexels-photo-6294360.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <li>Veggie Omelette</li></Link>
        </div> 

        <div className='list'>
        <Link to="/food/8" >
        <img src= "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <li>Blueberry Pancakes</li></Link>
        </div> 
    </div>  

    <div style={{display:"flex"}}>

<div className='list'>
<Link to="/food/9" >
<img src= "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
<li>Avocado Toast</li></Link>
</div> 

<div className='list'>
<Link to="/food/10" >
<img src=  "https://images.pexels.com/photos/5848088/pexels-photo-5848088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
<li>Breakfast Burrito</li></Link>
</div> 

<div className='list'>
<Link to="/food/11" >
<img src= "https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
<li>Eggs Benedict</li></Link>
</div> 
</div>  
     
      

        <Link to="/food/new" ><li>New Foods</li></Link>

  
   

    </div>
  )
}

export default FoodList