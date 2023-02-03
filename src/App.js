import './App.css';
import React from 'react';
import ListTask from './components/ListTask/ListTask';



function App() {
  return (
    <div className="App">
        <div className='tareas__lista__principal'>
            <h1>Mis Tareas</h1>
            <ListTask />
        </div>

    </div>
  );
}

export default App;
