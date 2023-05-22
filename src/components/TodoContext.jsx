import { createContext, useState } from "react"
import useLocalStorage from "../utils/useLocalStorage"

const TodoContext = createContext()

const TodoProvider = ({ children }) => {
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
    <TodoContext.Provider value={{
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      filterTodos,
      deleteTodo,
      completeTodo,
      isLoading,
      isError
    }}>
      { children }
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
