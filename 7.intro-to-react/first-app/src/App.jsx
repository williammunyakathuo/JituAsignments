import { useState } from 'react';
import './App.css';

function App() {
const [items, setItems]= useState(
  [{
    id: 1,
    todo: "do asignments",
    date: "7/4/2022"
  }, {
    id: 2,
    todo: "wash clothes",
    date: "7/14/2022"
  }, {
    id: 3,
    todo: "wash clothes",
    date: "5/27/2022"
  }, {
    id: 4,
    todo: "code",
    date: "3/4/2022"
  }, {
    id: 5,
    todo: "write weekly report",
    date: "12/2/2022"
  }, {
    id: 6,
    todo: "do asignments",
    date: "3/5/2022"
  }, {
    id: 7,
    todo: "code",
    date: "9/24/2022"
  }, {
    id: 8,
    todo: "code",
    date: "2/27/2022"
  }, {
    id: 9,
    todo: "write weekly report",
    date: "11/1/2022"
  }, {
    id: 10,
    todo: "code",
    date: "7/26/2022"
  }]  
)

  return (
    <div className="App">
      <h1>TO-DO LIST</h1>
      {items.map((item)=>
        <div className="itempreview" key={item.id} >
          <h2>{item.todo}</h2>
          <p>To be done by {item.date}</p>
        </div>
      )}
    </div>
  );
}

export default App;
