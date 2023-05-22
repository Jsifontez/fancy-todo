import { useContext } from 'react'
import { TodoContext } from './TodoContext';
import '../styles/TodoCounter.css'

function TodoCounter () {
  const {completedTodos, totalTodos} = useContext(TodoContext)

  return (
    <h1 className='TodoCounter'>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
    </h1>
  );
}

export default TodoCounter