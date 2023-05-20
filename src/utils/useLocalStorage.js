import { useState, useEffect } from 'react'

// const defaultTodos = [
//   {text: 'Cortar Cebolla', completed: false},
//   {text: 'terminar este cursito', completed: false},
//   {text: 'comer algo dulce', completed: true},
//   {text: 'lalalalalalala', completed: true}
// ]

// localStorage.setItem('FancyTODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('FancyTODO_V1')

const useLocalStorage = (itemName, initialValue) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [item, setItem] = useState(initialValue)

  useEffect(() => {
    const initializeStorage = (itemName, initialValue) => {
      try {
        const itemFromStorage = localStorage.getItem(itemName)
        if (!itemFromStorage) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          return initialValue
        }

        setItem(JSON.parse(itemFromStorage))
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        setIsError(true)
      }
    }

    setTimeout(() => initializeStorage(itemName, initialValue), 2000)

  }, [initialValue, itemName])

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return { item, saveItem, isLoading, isError}
}

export default useLocalStorage
