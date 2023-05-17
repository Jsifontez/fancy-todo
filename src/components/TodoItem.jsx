import '../styles/TodoItem.css'
import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon'

function TodoItem ({ text, completed, deleteTodo, completeTodo }) {

  return (
    <li className="TodoItem">
      <CompleteIcon completed={completed} completeTodo={completeTodo} />

      <p className={`TodoItem-p ${completed && "TodoItem-p--completed"}`}>
        {text}
      </p>

      <DeleteIcon deleteTodo={deleteTodo} />
    </li>
  );
}

export { TodoItem }
