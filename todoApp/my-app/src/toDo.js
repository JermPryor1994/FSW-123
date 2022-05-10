const ToDo = ({toDo, completeTo, deleteToDo}) =>{
        toDo.id.map((toDo,) => {
            return (
        <li>
            <label htmlFor='todo'>{toDo.text}</label>
            <input name='todo' type='checkbox' checked={toDo.isComplete} onChange={()=>completeTo(toDo.id)}/>
            <button onClick={()=>deleteToDo(toDo.id)}>X</button>
        </li>)})

}

export default ToDo