import AppUI from './components/AppUI'
import { TodoProvider } from './components/TodoContext'

function App() {
  return (
    // Provider is used for make all components inside of it and his children
    // to be able to use the context with <TodoContext.Consumer> or with the
    // useContext hook
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
}

export default App
