import { useState } from 'react'


import './App.css'
import Todo from './Todo'
import { Provider } from 'react-redux'
import { store } from './store/store'
import AsyncData from './AsyncData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-full  flex flex-col'>
      <Provider store={store}>
        <div className='w-full h-24 bg-slate-600 flex items-center  text-4xl justify-center font-bold text-white p-4'>Todo App</div>
        <div className='p-4 flex flex-row items-center w-full flex-1'>
          <Todo />
          <AsyncData />
        </div>
      </Provider>

    </div>
  )
}

export default App
