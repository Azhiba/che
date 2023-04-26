import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

function TodoList() {
    const todos =useSelector((state)=> state.todo.todoList)
    console.log(todos);
    const [showdone, setshowdone] = useState(false);
    const [show, setshow] = useState(false)
      return (
    <div className='todo-list'>
         < AddTodo  />
         {/* <button onClick={()=>setshow(!show)}>show all</button> */}
         <button onClick={()=> setshowdone(!showdone)}>{showdone? " show undone":" show done"}</button>
{todos
.filter((todo=>todo.isDone===showdone))
.map((todo)=>
<TodoItem todo={todo}/>)

}
{/* {show?todos.map((todo)=><TodoItem todo={todo}/>):null} */}
    </div>
  );
};

export default TodoList
