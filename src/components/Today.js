import React from 'react'
import {FiCheckSquare} from 'react-icons/fi' 
import {FiSquare} from 'react-icons/fi' 


const Today = () => {
  return (
    <div className='today common'>
      <h3>Tasks for Today</h3>
      <div className="list">
         <p className='list-item'><FiCheckSquare/>Go shopping</p>
         <p className='list-item'><FiSquare/>Go running</p>
         <p className='list-item'><FiSquare/>Read</p>
      </div>  
    </div>
  )
}

export default Today
