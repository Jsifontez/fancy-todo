import { useState } from 'react'
import useLocalStorage from './utils/useLocalStorage'
import AppUI from './components/AppUI'

function App() {
  const [searchValue, setSearchValue] = useState('')
  const {
    item: todos,
    saveItem: setTodos,
    isLoading,
    isError
  } = useLocalStorage('FancyTODOS_V1', [])

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
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filterTodos={filterTodos}
      deleteTodo={deleteTodo}
      completeTodo={completeTodo}
      isLoading={isLoading}
      isError={isError}
    />
  )
}

export default App
