import '../styles/TodoItem.css'

function TodoItem ({ text, completed, deleteTodo, completeTodo }) {

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icom-check ${completed && "Icon-check--active"}`}
        onClick={completeTodo}
      >
        V
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--completed"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={deleteTodo}>
        X
      </span>
    </li>
  );
}

export { TodoItem }