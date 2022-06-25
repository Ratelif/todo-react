import React from 'react'
import Buttons from './Buttons'
import Today from './Today'
import Tomorrow from './Tomorrow'

const Tasks = ({data}) => {
  return (
    <div className='tasks'> 
         <Today data={data}/>
         <Buttons />
         <Tomorrow data={data}/>
    </div>
  )
}

export default Tasks
