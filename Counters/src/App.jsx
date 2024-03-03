import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <main>
        <p>COUNTER:</p>
      </main>
   <div>
    <Button>Increment</Button>
    <Button>Decrement</Button>
   </div>
      </div>
  )
}

export default App
