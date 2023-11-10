

const ToDoItem = ({todo, handleDelete}) => {
  return (
    <li>
        {todo}
        <button onClick={handleDelete} className='delete-button'>Eliminar</button>
    </li>
  )
}

export default ToDoItem
