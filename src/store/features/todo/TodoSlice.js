import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}


const TodoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            console.log(todo)
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(item => item.id !== action.payload)
        }
    }
})

// console.log(TodoSlice)
// console.log(TodoSlice.reducer)
// console.log(TodoSlice.actions)


export const { addTodo, removeTodo } = TodoSlice.actions

export default TodoSlice.reducer