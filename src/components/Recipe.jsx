import React from 'react'
import "./Recipe.css"
// import { Link } from 'react-router-dom'

const Recipe = () => {
  return (
    <div className='recipe'>
     
     
      <div className='meals'>
        <h2>Dish Type</h2>
        <div className="meal-type">Appetizers & Snacks</div>
        <div className="meal-type">Bread Recipes</div>
        <div className="meal-type">Candy and Fudge</div>
        <div className="meal-type">Cake Recipes</div>
        <div className="meal-type">Casserole Recipes</div>
         <div className="dish-type">Cocktail Recipes</div>
         <div className="dish-type">Main Dishes</div>
         <div className="dish-type">Pasta Recipes</div>
         <div className="dish-type">pie Recipes</div>
         <div className="dish-type">Sanwishes</div>
         <div className="dish-type">Chrismas Cookies</div>
      </div>

      <hr />

      <div>
        <h3>Meal Type</h3>
        <div className="meal-type">Beakfast and Brunch</div>
        <div className="meal-type">Deserts</div>
        <div className="meal-type">Dinners</div>
        <div className="meal-type">Lunch</div>
      </div>

      <div>
        <h3>Diet and Health</h3>
        <div className="d-health">Diabetic</div>
        <div className="d-health">GLuten Free</div>
        <div className="d-health">high Fibre Recipes</div>
        <div className="d-health">Low Clorie</div>
      </div>

      <hr />

      <div>
        <h3>World Cuisine</h3>
        <div className="world">Nigerian</div>
        <div className="world">Chinese</div>
        <div className="world">Indian</div>
        <div className="world">Italian</div>
       
      </div>

     <hr />

      <div>
        <h3>Seasonal</h3>
        <div className="season">Baby Shower</div>
        <div className="season">Birthday</div>
        <div className="season">Christmas</div>
        <div className="season">Halloween</div>
      </div>
         <input type="text" placeholder='Search for recipes...' />
         <select name="latest" id="latest"></select>
         <img src="" alt="Course Title" />
         <select name="latest" id="latest"></select>
         <img src="" alt="Course Title" />
         <select name="latest" id="latest"></select>
         <img src="" alt="Course Title" />
    </div>
  )
}

export default Recipe