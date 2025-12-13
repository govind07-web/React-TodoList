import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'


function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    setTodos([...todos, { todo, isCompleted: false }]) //todo is getting added in todos
    setTodo("") //it resets input to blank
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-4 min-h-[80vh] bg-violet-100 rounded-xl">
        <div className="head p-5 text-xl font-bold text-center"> Tasks </div>

        <div className="flex gap-10 justify-center">
          <input onChange={handleChange} value={todo} type="text" className='w-3/4 p-2 bg-white' />
          <button onClick={handleAdd} className='bg-blue-400 hover:bg-blue-500 rounded-sm p-2 px-4 cursor-pointer'>Add</button>
        </div>

        <div className="todos">

          {todos.map(item=>{

          return <div className='p-1 m-1 flex justify-around'>
              <div className="todo flex gap-6 items-center">
                <input className='bg-green-400' type="checkbox" />
                <div className="">{item.todo}</div>
              </div>

              <div className="buttons">
                <button className="edit px-1 m-0.5 bg-violet-400 rounded-sm">edit</button>
                <button className="delete px-1 m-0.5 bg-violet-400 rounded-sm">del</button>
              </div>
            </div>

          })}
          

        </div>

      </div>
    </>
  )
}

export default App
