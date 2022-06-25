import React from 'react'
import Buttons from './Buttons'
import Today from './Today'
import Tomorrow from './Tomorrow'

const Tasks = ({data, setData, eventId, setEventId,singleData}) => {
  return (
    <div className='tasks'>
         <Today data={data} eventId={eventId} setEventId={setEventId} singleData={singleData}/>
         <Buttons data={data} eventId={eventId} setData={setData} setEventId={setEventId}/>
         <Tomorrow data={data}eventId={eventId} setEventId={setEventId} singleData={singleData}/>
    </div>
  )
}

export default Tasks
