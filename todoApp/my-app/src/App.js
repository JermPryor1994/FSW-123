import {todos} from './store';
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <TodoList text={todos}/>
    </div>
  );
}

export default App;
