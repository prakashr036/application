import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='container'>
    <MyComponent />
   </div>
  )
}

export default App
