/* eslint-disable no-undef */
import { useState } from 'react'
import './App.css'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import { arrayMoveImmutable } from 'array-move'

function App() {
  const [toDoItems, setToDoItems] = useState([])
  const [inputValue, setInputValue] = useState('')

  const saveItems = (e) => {
    e.preventDefault()

    const arr = toDoItems
    arr.push(inputValue)

    setToDoItems(arr)
    setInputValue('')
  }

  const SortableItem = SortableElement(({ value }) => (
    <li tabIndex={0}>{value}</li>
  ))

  const SortableList = SortableContainer(({ items }) => {
    return (
      <ul>
        {items.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </ul>
    )
  })

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setToDoItems(arrayMoveImmutable(toDoItems, oldIndex, newIndex))
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='container'>
          <h1>To do list</h1>
          <form
            onSubmit={(e) => {
              saveItems(e)
            }}
          >
            <input
              type='text'
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value)
              }}
            />

            <button type='submit'>Submit</button>
          </form>
          <div className='item-container'>
            {!toDoItems[0] ? (
              <p>Add some items to your to do list</p>
            ) : (
              <SortableList items={toDoItems} onSortEnd={onSortEnd} />
            )}
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
