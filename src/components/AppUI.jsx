import TodoCounter from '../components/TodoCounter'
import TodoSearch from '../components/TodoSearch'
import TodoList from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { TodoCreateButton } from '../components/TodoCreateButton'
import { TodosLoading } from '../components/TodosLoading'
import { TodosError } from '../components/TodosError'
import '../styles/App.css'
import { TodoContext } from './TodoContext'

function AppUI () {
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      {/* This is used to consume the context of react */}
      <TodoContext.Consumer>
        {({
          isLoading,
          isError,
          filterTodos,
          deleteTodo,
          completeTodo
        }) => (  
          <TodoList>
          {isLoading && <TodosLoading />}
          {isError && <TodosError />}
          {!isLoading && filterTodos.length === 0 && <p>Crea tu primer TODO</p>}

          {(!isLoading &&
            !isError &&
            filterTodos.length > 0) &&
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
        )}
      </TodoContext.Consumer>

      <TodoCreateButton />
    </>
  );
}

export default AppUI
