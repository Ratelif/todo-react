import React from 'react'

const Tomorrow = () => {
  const singleData = (e) => {
   console.log('id:', e.target.id, 'Value:',e.target.value, 'Name:',e.target.name,"checked:", e.target.checked)
  }
  return (
    <div className='tomorrow common'>
     <h3>Tasks for Tomorrow</h3>
      
         <div className="list-item">
          <label>
            <input type="checkbox" name="vehicle" id="vehicle1" value="Go 1" onChange={singleData}/><span>Pay the bill</span>
          </label>
        </div>
        <div className="list-item">
          <label>
            <input type="checkbox" name="vehicle" id="vehicle1" value="Go 1" onChange={singleData}/><span>Go on holiday</span>
          </label>
        </div>
      </div>  
  )
}

export default Tomorrow
