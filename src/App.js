import { useState } from 'react'
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
  const [searchValue, setSearchValue] = useState('')
  const [todos, setTodos] = useState(defaultTodos)

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={searchValue} />

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
