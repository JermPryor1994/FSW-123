
import React, {useState} from 'react'
import {storeTodos} from './store';
import './App.css';
import TodoList from './TodoList';


function App() {

  const [toDos, setToDos] = useState(storeTodos)

  const completeTodo = (id)=>{
    const toDoArray = [...toDos];
    const index = toDos.findIndex(toDo => toDo.id === id)
    toDoArray[index].isComplete = !toDoArray[index].isComplete
    setToDos(toDoArray)
  }

  const deleteTodo = (id)=>{
    const newToDos = toDos.filter(toDo => toDo.id !== id)
    setToDos(newToDos)
  }
  
  return (
    <div className="App">
      <TodoList toDos={toDos} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
