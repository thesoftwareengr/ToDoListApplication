import { useState } from "react"

export default function App() {
  const [newItem,setNewItem] = useState("")
  const [todos,setTodos]= useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos((currentTodos) => {
      return [
        ...todos,
        { id: crypto.randomUUID(), title:newItem, completed: false},
      
      ]

    })
    setNewItem("")
  }
  
  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo =>{
        if (todo.id == id){
          return { ...todo, completed}
        }

        return todo
      })
    })
  }
  
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  
  return  (  
  <>
  <form onSubmit={handleSubmit} className="new-item-form" action="">
    <div className="form-row">
      <label htmlFor="item">Add Work To Do</label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)}
      
      type="text" id="item" />
    </div>
    <button className="btn">Add</button>
  </form >
  <h1 className="Header">Todo List</h1>
  <ul className="list">
  {todos.length === 0 && "No To Dos"}
   {todos.map(todo => {
    return (
      <li key={todo.id}>
      <label>
      <input type="checkbox" 
      checked={todo.completed}
        onChange={e => toggleTodo(todo.id, e.target.checked)}
      />
      {todo.title}
      </label>
      <button onClick={()=>{ deleteTodo(todo.id) }} className="btn-delete">Delete</button>
    </li>
    )

   })}
  </ul>
  </>
  )
} 