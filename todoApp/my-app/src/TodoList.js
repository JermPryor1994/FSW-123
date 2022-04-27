const TodoList = (props) =>{
    return (
        props.text.map((todo, index) => {
            return (
            <li key={index}>
                <label for='todo'>{todo.text}</label>
                <input name='todo' type='checkbox'/>
            </li>)
        })
    )
}
export default TodoList