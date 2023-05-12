import TodoCounter from './components/TodoCounter'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { TodoCreateButton } from './components/TodoCreateButton'
import './App.css'

const defaultTodos = [
  {text: 'Cortar Cebolla', completed: false},
  {text: 'terminar este cursito', completed: false},
  {text: 'comer algo dulce', completed: true}
]

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25} />

      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <TodoCreateButton />
    </>
  );
}

export default App
