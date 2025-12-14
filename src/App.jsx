import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showfinished, setShowfinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, [])
  

  const savetoLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleShowfinished = () => {
    setShowfinished(!showfinished);
  }

  const handleAdd = () => {
    if (!todo.trim()) return  //Prevents adding: empty todos & todos with spaces
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]) //todo is getting added in todos
      setTodo("") //it resets input to blank
      savetoLS();
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;                  
    let index = todos.findIndex(item => {
      return item.id === id; //comparing the id to get the index of the id
    })
    let newTodos = [...todos]; //todos should be written in [], otherwise new array wont be created
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    savetoLS();
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(item => item.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter(item => {
      return item.id !== id;
    }) 
    setTodos(newTodos);
    savetoLS();
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id;
    }) 
    setTodos(newTodos);
    savetoLS();
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-4 min-h-[80vh] bg-violet-100 rounded-xl">
        <div className="head p-5 text-xl font-bold text-center"> Tasks </div>

        <div className="flex gap-10 justify-center">
          <input onChange={handleChange} value={todo} type="text" className='w-3/4 p-2 bg-white' />
          <button onClick={handleAdd} className='bg-violet-600 hover:bg-violet-700 rounded-sm p-2 px-4 cursor-pointer'>Add</button>
        </div>

        <input onChange={toggleShowfinished} className='mt-4 ml-28' checked={showfinished} type="checkbox" /> Show Finished
        <h2 className='my-4 mx-28 font-bold'>Your Tasks:</h2>

        <div className="todos">
          {todos.length === 0 &&  <div className='mx-28'>No Task To Display</div>}

          {todos.map(item => {

            return (showfinished || !item.isCompleted) &&  <div key={item.id} className='p-1 m-1 flex justify-between w-[60vw] mx-auto'>
              <div className="todo flex gap-6 items-center">
                <input name={item.id} onChange={handleCheckbox} checked={item.isCompleted} className='bg-green-400' type="checkbox"  />
                <div className={item.isCompleted ? "line-through" : ""}> {item.todo} </div>
              </div>

              <div className="buttons">
                <button onClick={(e) => handleEdit(e, item.id)} className="edit p-1 m-0.5 bg-violet-600 rounded-sm"><FaEdit /></button>
                <button onClick={(e) => handleDelete(e, item.id)} className="delete p-1 m-0.5 bg-violet-600 rounded-sm"><MdDelete /></button>
              </div>
            </div>

          })}


        </div>

      </div>
    </>
  )
}

export default App
