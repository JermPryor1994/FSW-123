
import React, {useState} from 'react'
import {storeTodos} from './components/store';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/todoForm';
import {v4 as uuidv4} from 'uuid'; 

function App() {

  const [toDos, setToDos] = useState(storeTodos)
  const toDoArray = [...toDos];

  const completeTodo = (id)=>{
    const index = toDos.findIndex(toDo => toDo.id === id)
    toDoArray[index].isComplete = !toDoArray[index].isComplete
    setToDos(toDoArray)
  }

  const deleteTodo = (id)=>{
    const newToDos = toDos.filter(toDo => toDo.id !== id)
    setToDos(newToDos)
  }

  const addTodo = (text)=>{
    const todoToAdd = {
      id: uuidv4(),
      text: text,
      isComplete: false
    }
    toDoArray.push(todoToAdd)
    setToDos(toDoArray)
  }
  
  return (
    <div className="App">
      <h1>The Greatest List Ever!</h1>
      <h3>Your Chore List!</h3>
      <TodoForm addTodo={addTodo}/>
      <TodoList text={toDos} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
