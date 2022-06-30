import React from 'react'
import Form from './Form'

const Tomorrow = ({data,singleData}) => {
  return (
    <div className='tomorrow common'>
        <Form data={data} singleData={singleData} header="Tasks for Tomorrow" day="tomorrow" />
     </div>  
  )
}

export default Tomorrow
