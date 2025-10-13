import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoListAssignment from './components/ToDoListAssignment.jsx'


function App() {
  const [count, setCount] = useState(5)

  return (
    <>
           <ToDoListAssignment />

   
      
      
    </>
  )
}

export default App