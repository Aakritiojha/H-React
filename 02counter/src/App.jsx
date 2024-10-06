import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 5

  const addValue = () => {
    if(counter<20){
    counter += 1
    setCounter(counter)
    }
  }

  const removeValue = () => {
    if(counter>0){
    console.log("clicked", counter)
    counter -= 1
    setCounter(counter)
    }
  }

  return (
    <>
    <h1>Aaks React</h1>
    <h2>Counter Value: {counter} </h2>

        <button
        onClick={addValue}
        >Increament value {counter}</button>
        <br /> <br />
        <button
        onClick={removeValue}
        >Decreament value {counter}</button>
    </>
  )
}

export default App
