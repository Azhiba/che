import { createSlice } from '@reduxjs/toolkit'

const initialState = {
todoList:[
    {
        id : Math.random(),
        title:"todo item 1",
        description:" descrition todo item 1",
        isDone:false,

    },
    {
        id : Math.random(),
        title:"todo item 2",
        description:" descrition todo item 2",
        isDone:false,

    },
    {
        id : Math.random(),
        title:"todo item 3",
        description:" descrition todo item 3",
        isDone:true,

    }

]
}


export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    
    addTask: (state, action) => {
      state.todoList.push(action.payload)
      console.log(action)
    },

    remove: (state, action) => {
       state.todoList = state.todoList.filter(
        (el)=>el.id !==action.payload.id)
        console.log(action)}
  ,

  doneTask: (state, action) => {
   let i=state.todoList.findIndex ((el)=>el.id=== action.payload.id)
     state.todoList[i]= {
        ...state.todoList[i],
        isDone:!state.todoList[i].isDone
    }
},

UpdateTask: (state, action) => {
    let i=state.todoList.findIndex ((el)=>el.id=== action.payload.id)

      state.todoList[i]= {
       ...state.todoList[i],
         title:action.payload.edited.title,
         description:action.payload.edited.description,
      }
 },
 

  }
})


export const {addTask, remove,doneTask,UpdateTask} = TodoSlice.actions

export default TodoSlice.reducer