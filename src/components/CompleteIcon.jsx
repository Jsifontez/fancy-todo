import { TodoIcon } from "./TodoIcon"

const CompleteIcon = ({ completed, completeTodo }) => {
  return (
    <TodoIcon
      type="check"
      color={completed ? "green" : "gray"}
      handleClick={completeTodo}
    />
  )
}

export { CompleteIcon }
