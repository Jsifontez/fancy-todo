import { useContext } from 'react'
import { TodoContext } from './TodoContext';
import '../styles/TodoCreateButton.css'

const TodoCreateButton = () => {
  const { setIsModalOpen } = useContext(TodoContext)

  return (
    <button
      className="CreateTodoButton"
      onClick={() => setIsModalOpen(state => !state)}
    >
      +
    </button>
    // <input type="button" value="+" />
  );
}

export { TodoCreateButton }