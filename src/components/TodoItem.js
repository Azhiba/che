import React from 'react'
import { useDispatch } from 'react-redux'
import { doneTask, remove } from '../redux/TodoSlice'
import EditTask from './EditTask'

function TodoItem({todo}) {
const dispatch =useDispatch()

  return (
    <div className={`todo-item ${todo.isDone ? "Done" : "undone"}`}>
    <div className='text'>
      <h2> {todo.title}</h2>
      <p> {todo.description}</p>
      </div>
      < button onClick={()=>dispatch(doneTask({id: todo.id}))} > 
      {todo.isDone?"Done" :"Not Done"}</button>

<EditTask id={todo.id}/>

      <button onClick={()=>dispatch(remove({id: todo.id}))} 
      >remove
       </button>

    </div>
  )
}

export default TodoItem
