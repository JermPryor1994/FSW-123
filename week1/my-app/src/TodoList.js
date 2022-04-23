const TodoList = () =>{
    return (
        <ul>
            <li>
                <label htmlFor='cb1'>Go To Gym</label>
                <input type='checkbox' id='cb1'/>
            </li>
            <li>
                <label htmlFor='cb2'>Do Laundry</label>
                <input type='checkbox' id='cb2'/>
            </li>
            <li>
                <label htmlFor='cb3'>Food Shopping</label>
                <input type='checkbox' id='cb3'/>
            </li>
            <li>
                <label htmlFor='cb4'>Do Homework</label>
                <input type='checkbox' id='cb4'/>
            </li>
        </ul>
    )
}
export default TodoList