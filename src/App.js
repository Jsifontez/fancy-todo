import TodoCounter from './components/TodoCounter'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { TodoCreateButton } from './components/TodoCreateButton'
import './App.css'

function App() {
  return (
    <div className="App">
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <TodoCreateButton />
    </div>
  )
}

export default App
