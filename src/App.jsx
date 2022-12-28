import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import CheckUncheckAll from './components/CheckUncheckAll';


function App() {

  return (
    <div className="App">
      <div className='col-4 m-auto mt-3'>
        <h3>Todos List</h3>
        <CheckUncheckAll />
        <TodoForm />
        <TodoList />
      </div>

    </div>
  );
}

export default App;
