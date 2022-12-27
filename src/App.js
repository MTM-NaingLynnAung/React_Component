import './App.css';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import CheckBox from './components/CheckBox';

function App() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || [])
  const unique_id = uuidv4();

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  } , [todos])

  const addTodo = (todo) => {
    
    // if(titleName.trim().length !== 0){
      setTodos([...todos, {id: unique_id, title: todo, isCompleted: false, isEditing: false}])
    // }
    
  }


  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
          return {...todo, isCompleted: !todo.isCompleted}
        }
        return todo
      })
    )
  }

  const handleEdit = (id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
          return {...todo, isEditing: !todo.isEditing}
        }
        return todo
      })
    )
  }

  const removeInput = (e,id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
          if(e.target.value.trim().length === 0){
            return { ...todo, isEditing: false }
          }
          return {...todo, title: e.target.value, isEditing: false}
        }
        return todo
      })
    )
  }

  const handleDelete = (id) => {
    setTodos([...todos].filter(todo => todo.id !== id))
  }

  const remaining = todos.filter(todo => !todo.isCompleted).length

  const clearCompleted = () => {
    setTodos([...todos].filter(todo => !todo.isCompleted))
  }

  const completed = todos.filter(todo => todo.isCompleted).length

  const checkAll = () => {
    setTodos(
      todos.map( todo => {
        return { ...todo, isCompleted: true }
       })
    )
  }

  const unCheckAll = () => {
    setTodos(
      todos.map( todo => {
        return { ...todo, isCompleted: false }
       })
    )
  }

  return (
    <div className="App">
      <div className='col-4 m-auto mt-3'>
        <h3>Todos List</h3>
        < CheckBox remaining={remaining} checkAll={checkAll} unCheckAll={unCheckAll} />
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} 
        toggleComplete={toggleComplete} 
        handleEdit={handleEdit} 
        removeInput={removeInput} 
        handleDelete={handleDelete} 
        remaining={remaining} 
        completed={completed} 
        clearCompleted={clearCompleted} />
      </div>
      
    </div>
  );
}

export default App;
