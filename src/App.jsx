import './App.css';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import CheckUncheckAll from './components/CheckUncheckAll';
import { TodosContext } from './context/TodosContext';

function App() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || [])


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  } , [todos])

  return (
    <TodosContext.Provider value={{todos, setTodos}}>
    <div className="App">
      <div className='col-4 m-auto mt-3'>
        <h3>Todos List</h3>
        <CheckUncheckAll />
        <TodoForm />
        <TodoList />
      </div>
      
    </div>
    </TodosContext.Provider>
  );
}

export default App;
