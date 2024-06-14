import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const header = () => {
  return (
    <div>
        <div className="pic">
            <h1>Choose from thousands of recipes</h1>
            <p style={{fontWeight:"bold"}}>Appropriately integrate technically sound value with scalable<br/>infomediaries negotiate sustainable strategic theme areas</p>
            <Link to={'/signup'}>
              <h3>sign up today  </h3>
            </Link>
        </div>
    </div>
  )
}

export default header