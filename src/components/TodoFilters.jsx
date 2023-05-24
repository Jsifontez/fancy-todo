import { useContext } from "react"
import { TodoContext } from "./TodoContext"
import '../styles/TodoFilters.css'

const TodoFilter = () => {
  const { filter, setFilter } = useContext(TodoContext)
  return (
    <div className="filter-container">
      <button
        className={`filter ${!filter && "filter--selected"}`}
        onClick={() => setFilter(false)}
      >
        TO DO
      </button>

      <button
        className={`filter ${filter && "filter--selected"}`}
        onClick={() => setFilter(true)}
      >
        DONE
      </button>
    </div>
  )
}

export { TodoFilter }
