import { useState } from 'react'

// const defaultTodos = [
//   {text: 'Cortar Cebolla', completed: false},
//   {text: 'terminar este cursito', completed: false},
//   {text: 'comer algo dulce', completed: true},
//   {text: 'lalalalalalala', completed: true}
// ]

// localStorage.setItem('FancyTODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('FancyTODO_V1')

const useLocalStorage = (itemName, initialValue) => {
  const initializeStorage = (itemName, initialValue) => {
    const itemFromStorage = localStorage.getItem(itemName)
    if (!itemFromStorage) {
      localStorage.setItem(itemName, JSON.stringify(initialValue))
      return initialValue
    }

    return JSON.parse(itemFromStorage)
  }

  const [item, setItem] = useState(() => initializeStorage(itemName, initialValue))

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}

export default useLocalStorage