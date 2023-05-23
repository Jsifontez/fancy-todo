import { useState, useContext } from 'react'
import { TodoContext } from './TodoContext'
import '../styles/TodoForm.css'

const TodoForm = () => {
  const {
    addTodo,
    setIsModalOpen,
  } = useContext(TodoContext)
  const [newTodoValue, setNewTodoValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(newTodoValue)
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleTextChange = (e) => {
    setNewTodoValue(e.target.value)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder='Estudiar 1 hora en Frontend Masters'
        value={newTodoValue}
        onChange={handleTextChange}
        required
      />
      <div className='TodoForm-btn-container'>
        <button
          className='TodoForm-btn TodoForm-btn--cancel'
          onClick={(e) => handleCancel(e)}
        >
          Cancelar
        </button>
        <button className='TodoForm-btn TodoForm-btn--add'> Añadir </button>
      </div>
    </form>
  )
}

export { TodoForm }
