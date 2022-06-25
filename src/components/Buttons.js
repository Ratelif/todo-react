import React from 'react'
import {FaArrowAltCircleRight} from 'react-icons/fa' 
import {FaArrowAltCircleLeft} from 'react-icons/fa' 
import {BsTrashFill} from 'react-icons/bs' 


const Buttons = () => {
  return (
    <div className='buttons'>
      <div className="button" onClick={()=> console.log('tomorrow button clicked')}>
      <p><FaArrowAltCircleRight /></p>
      <p>Tomorrow</p>
      </div>

      <div className="button" onClick={()=> console.log('today button clicked')}>
      <p><FaArrowAltCircleLeft /></p>
      <p>Today</p>
      </div>

      <div className="button" onClick={()=> console.log('delete button clicked')}>
      <p><BsTrashFill /></p>
      <p>Delete</p>
      </div>
    </div>
  )
}

export default Buttons
