import { useState } from 'react'
import './App.css'

function App() {
  const [toDoItems, setToDoItems] = useState([])
  const [inputValue, setInputValue] = useState('')

  const saveItems = (e) => {
    e.preventDefault()

    const arr = toDoItems
    const obj = { name: inputValue }
    arr.push(obj)

    setToDoItems(arr)
    setInputValue('')
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
            {toDoItems.length < 0 ? (
              <p>Add some items to your to do list</p>
            ) : (
              toDoItems.map((item, index) => {
                return (
                  <div key={index}>
                    <p>{item.name}</p>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
