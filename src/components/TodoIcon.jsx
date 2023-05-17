import { ReactComponent as CheckSVG } from "../assets/check.svg"
import { ReactComponent as DeleteSVG } from "../assets/delete.svg"
import '../styles/TodoIcon.css'

const iconTypes = {
  'check': (color) => <CheckSVG className="Icon-svg"  fill={color} />,
  'delete': (color) => <DeleteSVG className="Icon-svg" fill={color} />,
}

const TodoIcon = ({ type, color, handleClick }) => {
  return (
    <span
      className={`Icon-container Icon-container-${type}`}
      onClick={handleClick}
    >
      {iconTypes[type](color)}
    </span>
  )
}

export { TodoIcon }
