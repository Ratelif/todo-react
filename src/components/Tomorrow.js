import React from 'react'
import {FiCheckSquare} from 'react-icons/fi' 
import {FiSquare} from 'react-icons/fi' 

const Tomorrow = () => {
  return (
    <div className='tomorrow common'>
     <h3>Tasks for Tomorrow</h3>
      <div className="list">
         <p className='list-item'><FiCheckSquare/> Pay the bill</p>
         <p className='list-item'><FiSquare/> Go on holiday</p>
      </div>  
    </div>
  )
}

export default Tomorrow
