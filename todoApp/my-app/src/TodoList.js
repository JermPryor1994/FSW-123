import ToDo from "./toDo"

const TodoList = (props) =>{
    <ToDo key={props.index} toDo={props.toDo} completeToDo={props.completeToDo} deleteToDo={props.deleteToDo}/>
}
export default TodoList