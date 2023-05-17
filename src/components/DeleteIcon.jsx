import { TodoIcon } from "./TodoIcon"

const DeleteIcon = ({ deleteTodo }) => {
  return (
    <TodoIcon type="delete" color="gray" handleClick={deleteTodo}/>
  )
}

export { DeleteIcon }
