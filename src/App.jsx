import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="container mx-auto my-4">
        <div className="head bg-violet-300 p-5 rounded-xl">
          hrry
        </div>
      </div>
    </>
  )
}

export default App
