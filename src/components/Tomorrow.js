import React from 'react'

const Tomorrow = ({data}) => {
  const singleData = (e) => {
   console.log('id:', e.target.id, 'Value:',e.target.value, 'Name:',e.target.name,"checked:", e.target.checked)
  }
  return (
    <div className='tomorrow common'>
     <h3>Tasks for Tomorrow</h3>
       {data && data.map((event)=>{
           return (
            event.date === "tomorrow" &&
           <div className="list-item" key={event.id}>
            <label>
            <input type="checkbox" name="vehicle" id={event.id} value="Go 3" onChange={singleData}/><span>{event.title}</span>
          </label>
          </div>) 
        })} 
         
     </div>  
  )
}

export default Tomorrow
