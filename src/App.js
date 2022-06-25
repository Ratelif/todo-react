import { useState } from 'react';
import './App.css';
import NewTask from './components/NewTask'; 
import Tasks from './components/Tasks';

function App() {
  const [data, setData] = useState([ {
        "id" : "1656098719369",
        "title" : "Go shopping",
        "date" : "today"
    },
    {
        "id" : "1656098722995",
        "title" : "Go running",
        "date" : "today"
    },
    {
        "id" : "1656098726731",
        "title" : "Read",
        "date" : "today"
    },
    {
        "id" : "1656099270408",
        "title" : "Pay the bill",
        "date" : "tomorrow"
    },
    {
        "id" : "1656099299066",
        "title" : "Go on holiday",
        "date" : "tomorrow"
    }])

    const [eventId, setEventId] = useState([])

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
    <div className="App">
      <NewTask data={data} setData={setData}/>
      <Tasks data={data} setData={setData} eventId={eventId} setEventId={setEventId} singleData={singleData}/>
    </div>
   
  );
}

export default App;
