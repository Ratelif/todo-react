import React from 'react'
import { useState } from 'react'
import {FiCheckSquare} from 'react-icons/fi' 
import {FiSquare} from 'react-icons/fi' 


const Today = () => {
  const [status, setStatus] = useState(false)

  const formData = (e)=>{
   e.preventDefault()
   const formData = new FormData(e.target);
   console.log(formData);
   console.log(e.target.elements.vehicle[0].id, e.target.elements.vehicle[0].checked);    // így megvan a checked
   console.log(e.target.elements.vehicle[1].id,e.target.elements.vehicle[1].checked);    // így megvan a checked
   console.log(e.target.elements.vehicle.length);
   console.log(e.target.parentElement);
  }

  const singleData = (e) => {
   console.log('id:', e.target.id, 'Value:',e.target.value, 'Name:',e.target.name,"checked:", e.target.checked)
  }

  return (
    <div className='today common'>
      <h3>Tasks for Today</h3>
      <form className="list" onSubmit={formData}>
        <div className="list-item">
          <label>
            <input type="checkbox" name="vehicle" id="vehicle1" value="Go 1" onChange={singleData}/><span>Go shopping</span>
          </label>
        </div>
        <div className="list-item">
          <label>
            <input type="checkbox" name="vehicle" id="vehicle2" value="Go 2" onChange={singleData}/><span>Go running</span>
          </label>
        </div>
        <div className="list-item">
          <label>
            <input type="checkbox" name="vehicle" id="vehicle3" value="Go 3" onChange={singleData}/><span>Read</span>
          </label>
        </div>
         <input type="submit" value="küld" />
      </form>  
    </div>
  )
}

export default Today
