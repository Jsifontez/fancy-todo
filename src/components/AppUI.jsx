import { useContext } from 'react'
import TodoCounter from '../components/TodoCounter'
import TodoSearch from '../components/TodoSearch'
import TodoList from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { TodoCreateButton } from '../components/TodoCreateButton'
import { TodosLoading } from '../components/TodosLoading'
import { TodosError } from '../components/TodosError'
import Modal from '../components/Modal'
import { TodoForm } from './TodoForm'
import { TodoFilter } from './TodoFilters'
import { TodoContext } from './TodoContext'
import '../styles/App.css'

function AppUI () {
  const {
    isLoading,
    isError,
    filterTodos,
    deleteTodo,
    completeTodo,
    isModalOpen
  } = useContext(TodoContext)

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoFilter />

      <TodoList>
        {isLoading && <TodosLoading />}
        {isError && <TodosError />}
        {!isLoading && filterTodos.length === 0 && (
          <p style={{ textAlign: "center" }}>Agrega un TODO</p>
        )}

        {!isLoading &&
          !isError &&
          filterTodos.length > 0 &&
          filterTodos.map((todo, index) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              deleteTodo={() => deleteTodo(index)}
              completeTodo={() => completeTodo(index)}
            />
          ))}
      </TodoList>

      <TodoCreateButton />

      {isModalOpen && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export default AppUI
