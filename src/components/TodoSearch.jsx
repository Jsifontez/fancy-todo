import { useContext } from 'react'
import { TodoContext } from './TodoContext'
import '../styles/TodoSearch.css'

function TodoSearch () {  
  const {searchValue, setSearchValue} = useContext(TodoContext)

  return (
    <input
      className='TodoSearch'
      placeholder="Cortar cebolla"
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value)
      }}
    />
  )
}

export default TodoSearch
