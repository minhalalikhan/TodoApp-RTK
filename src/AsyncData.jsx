import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { FetchData } from './store/features/asyncData/AsyncDataSlice'
import { useDispatch } from 'react-redux'



function AsyncData() {
    const dispatch = useDispatch()
    const reduxdata = useSelector(state => state.AsyncDataReducer)

    async function getdata() {

        dispatch(FetchData())

    }

    useEffect(() => {

        getdata()
    }, [])

    useEffect(() => {
        // console.log(reduxdata)
    }, [reduxdata])
    return (
        <div className='w-full flex flex-col items-center justify-start text-center h-full'>

            <h1 className=' font-bold text-2xl text-slate-400 pb-4'> Async Data</h1>
            <div
                className='flex justify-center flex-col text-center'
            >{reduxdata.data.hasOwnProperty("users") ?
                reduxdata.data.users.map((item) => {
                    return <div key={item.id}
                        className='p-2'
                    >{item.name}</div>
                })
                :
                <h1 className=' font-bold text-2xl text-slate-400'> data not available</h1>}
            </div>

        </div>
    )
}

export default AsyncData