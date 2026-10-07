import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const Addcount = () => {
    if (count < 20)
    setCount(count + 1)
  }

  const Removecount = () => {
    if(count > 0)
    setCount(count - 1)
  }

  return (
    <>
      <h2>Counter App</h2>
      <h4>Count: {count}</h4>
      <button onClick={Addcount}>Increase +</button><br />
      <button onClick={Removecount}>Decrease -</button>
    </>
  )
}

export default App
