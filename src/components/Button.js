import React from 'react'
import {FaArrowAltCircleRight} from 'react-icons/fa' 
import {FaArrowAltCircleLeft} from 'react-icons/fa' 
import {BsTrashFill} from 'react-icons/bs' 

const Button = ({sendFunction, text}) => {
  return (
      <div className="button" onClick={()=> sendFunction()}>
      <p>
         {text === "Tomorrow" && <FaArrowAltCircleRight /> }
         {text === "Today" && <FaArrowAltCircleLeft /> }
         {text === "Delete" && <BsTrashFill /> }
      </p>
      <p>{text}</p>
      </div>
  )
}

export default Button
