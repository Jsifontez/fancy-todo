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
  {text: 'comer algo dulce', completed: true},
  {text: 'lalalalalalala', completed: true}
]

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [todos, setTodos] = useState(defaultTodos)

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  const filterTodos = todos.filter(todo => {
    const todoText = todo.text.toLocaleLowerCase()
    const searchText = searchValue.toLocaleLowerCase()

    return todoText.includes(searchText)
  })

  const deleteTodo = (todoPosition) => {
    const newTodos = todos.filter((todo, index) => index !== todoPosition)
    setTodos([...newTodos])
  }

  const completeTodo = (todoPosition) => {
    const newTodos = [...todos]
    newTodos[todoPosition].completed = true
    setTodos(newTodos)
  }

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {filterTodos.map((todo, index) => (
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
    </>
  );
}

export default App
