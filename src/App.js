import './App.css';
import React from 'react';
import ListTask from './components/ListTask/ListTask';



function App() {
  return (
    <div className="App">
        <div className='tareas__lista__principal'>
            <h1>My Tasks</h1>
            <ListTask />
        </div>

    </div>
  );
}

export default App;
