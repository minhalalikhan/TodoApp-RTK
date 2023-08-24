import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from './features/todo/TodoSlice'
import AsyncDataReducer from './features/asyncData/AsyncDataSlice'

export const store = configureStore({
    reducer: { TodoReducer, AsyncDataReducer },
})