import React from 'react'
const Today = ({data,eventId,setEventId}) => {
  
  // form elküldés egybe:
  const formData = (e)=>{
   e.preventDefault()
   const formData = new FormData(e.target);
   console.log(formData);
   console.log(e.target.elements.vehicle[0].id, e.target.elements.vehicle[0].checked);    // így megvan a checked
   console.log(e.target.elements.vehicle[1].id,e.target.elements.vehicle[1].checked);    // így megvan a checked
   console.log(e.target.elements.vehicle.length);
   console.log(e.target.parentElement);
  }

  // form adatok 
    const singleData = (e) => {
      const id = e.target.id
      
      const EditedData = () => {
		    let newEventId = eventId.filter(singleData => singleData.id !== id)              
        setEventId(newEventId)
      }  

   console.log('id:', e.target.id, 'Value:',e.target.value, 'Name:',e.target.name,"checked:", e.target.checked)
   e.target.checked ? setEventId([...eventId, {id: e.target.id, date: e.target.name }]) : EditedData()
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
            <input type="checkbox" name={event.date} id={event.id} value={event.date} onChange={singleData}/><span>{event.title}</span>
          </label>
          </div>) 
        })}
        {/* <input type="submit" value='go'/> */}
      </form>  
    </div>
  )
}

export default Today
