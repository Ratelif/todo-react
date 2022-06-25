import React from 'react'
import {FaArrowAltCircleRight} from 'react-icons/fa' 
import {FaArrowAltCircleLeft} from 'react-icons/fa' 
import {BsTrashFill} from 'react-icons/bs' 


const Buttons = () => {
  return (
    <div className='buttons'>
      <div className="button">
      <p><FaArrowAltCircleRight /></p>
      <p>Tomorrow</p>
      </div>

      <div className="button">
      <p><FaArrowAltCircleLeft /></p>
      <p>Today</p>
      </div>

      <div className="button">
      <p><BsTrashFill /></p>
      <p>Delete</p>
      </div>
    </div>
  )
}

export default Buttons
