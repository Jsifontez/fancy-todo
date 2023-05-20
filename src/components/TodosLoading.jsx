import '../styles/TodosLoading.css'

const TodosLoading = () => {
  return (
    <>
      <li className="LoadingItem">
        <span className="shadow"></span>
        <span className="item-icon item--check"></span>
        <span className="item-icon item--delete"></span>
      </li>
      <li className="LoadingItem">
        <span className="shadow"></span>
        <span className="item-icon item--check"></span>
        <span className="item-icon item--delete"></span>
      </li>
      <li className="LoadingItem">
        <span className="shadow"></span>
        <span className="item-icon item--check"></span>
        <span className="item-icon item--delete"></span>
      </li>
    </>
  )
}

export { TodosLoading }
