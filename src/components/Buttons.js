import React from 'react'
import {FaArrowAltCircleRight} from 'react-icons/fa' 
import {FaArrowAltCircleLeft} from 'react-icons/fa' 
import {BsTrashFill} from 'react-icons/bs' 

const Buttons = ({data, setData, eventId, setEventId}) => {
  const deleteData = (()=> {
    let counters = {} 
    let result = ( data.concat(eventId).map(cur => (counters[cur.id] ? counters[cur.id]++ : (counters[cur.id] = 1), cur)).filter(cur => counters[cur.id] === 1))
    setData(result)
    setEventId([])
  })

  const moveDataFromToday = (()=>{
    data.map(dataRow => {
      return eventId.some(item => item.id == dataRow.id) && (setEventId([]), setData([...data, dataRow.date = "tomorrow"]))
    } )
  })

  const moveDataFromTomorrow = (()=>{
    data.map(dataRow => {
      return eventId.some(item => item.id == dataRow.id) && (setEventId([]), setData([...data, dataRow.date = "today"]))
    } )
  })

  return (
    <div className='buttons'>
      <div className="button" onClick={()=> moveDataFromToday()}>
      <p><FaArrowAltCircleRight /></p>
      <p>Tomorrow</p>
      </div>

      <div className="button" onClick={()=> moveDataFromTomorrow()}>
      <p><FaArrowAltCircleLeft /></p>
      <p>Today</p>
      </div>

      <div className="button" onClick={()=> deleteData()}>
      <p><BsTrashFill /></p>
      <p>Delete</p>
      </div>
    </div>
  )
}

export default Buttons
