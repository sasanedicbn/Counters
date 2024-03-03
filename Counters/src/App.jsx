import { useState } from 'react'
import Button from './Button'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="main-content">
        <p>COUNTER:</p>
      </div>
   <div>
      <Button>Increment</Button>
       <Button>Decrement</Button>
   </div>
     </div>
  )
}

export default App
