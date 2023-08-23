import { useDispatch } from "react-redux"
import { addTodo, removeTodo } from "./store/features/todo/TodoSlice"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { FaAngleRight, FaTrash } from 'react-icons/fa'

import React, { useState } from "react"
function Todo() {
    const todoList = useSelector(state => state.TodoReducer.todos)


    const [todoinput, setTodoinput] = useState('')
    const dispatch = useDispatch()

    function handleadd(e) {
        e.preventDefault();

        if (todoinput.trim().length > 0)
            dispatch(addTodo(todoinput))
        setTodoinput('')
    }
    return (
        <div className="w-full flex flex-col items-center justify-start text-center h-full">
            <div className="m-4 flex justify-center flex-col  w-1/3 max-h-96 overflow-auto pr-4" >
                {todoList.length > 0 ? todoList.map(item => {
                    return <div key={item.id}
                        className=" flex flex-row justify-between w-full py-2 "
                    >{item.text} <button onClick={() => { dispatch(removeTodo(item.id)) }}><FaTrash /></button></div>
                }) : <h1 className=" font-bold text-2xl text-slate-400">No Notes right now</h1>}
            </div>
            <form onSubmit={handleadd} className="">
                <div className=" flex flex-row p-2 items-center justify-center rounded bg-slate-300    focus-within:border-gray-900 focus-within:border-2">

                    <input type="text"
                        className=" mx-2 rounded bg-slate-300 text-slate-950 mx-auto focus:outline-none  "
                        value={todoinput} onChange={(e) => setTodoinput(e.target.value)} placeholder="Enter Todo Here" />
                    <div className="cursor-pointer" onClick={handleadd}>
                        <FaAngleRight />

                    </div>
                </div>

            </form>

        </div>
    )
}

export default Todo