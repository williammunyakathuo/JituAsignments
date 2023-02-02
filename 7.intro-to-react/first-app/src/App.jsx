import { useState } from 'react';
import './App.css';

function App() {
const [items, setItems]= useState(
  [{
    id: 1,
    todo: "Do asignments",
    date: "7/4/2022"
  }, {
    id: 2,
    todo: "Do laundry",
    date: "7/14/2022"
  }, {
    id: 3,
    todo: "Attend Lecture",
    date: "5/27/2022"
  }, {
    id: 4,
    todo: "Read a novel",
    date: "3/4/2022"
  }, {
    id: 5,
    todo: "Write weekly report",
    date: "12/2/2022"
  }, {
    id: 6,
    todo: "Visit cousin",
    date: "3/5/2022"
  }, {
    id: 7,
    todo: "Go shopping",
    date: "9/24/2022"
  }, {
    id: 8,
    todo: "Send Email",
    date: "2/27/2022"
  }, {
    id: 9,
    todo: "Order imports",
    date: "11/1/2022"
  }, {
    id: 10,
    todo: "Write code",
    date: "7/26/2022"
  }]  
)

  return (
    <div className="App">
      <div className="container"></div>
        <div className="header"> 
          <h1>TO-DO LIST</h1>
          <h2>Add to your list here</h2>
          <div className='addnew'>
            <input className='add' type="text"  placeholder='Add new to do'/>
            <button>Add New</button>
          </div>
        </div>
        <div className="todolist">
          {items.map((item)=>
            <div className="itempreview" key={item.id} >
              <h2>{item.todo}</h2>
              <p>To be done by {item.date}</p>
            </div>
          )}
        </div>  
    </div>
  );
}

export default App;
