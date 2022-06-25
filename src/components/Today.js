import React from 'react'

const Today = ({data}) => {
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
        {data && data.map((event)=>{
           return (
            event.date === "today" &&
           <div className="list-item" key={event.id}>
            <label>
            <input type="checkbox" name="vehicle" id={event.id} value="Go 3" onChange={singleData}/><span>{event.title}</span>
          </label>
          </div>) 
        })}
      </form>  
    </div>
  )
}

export default Today
