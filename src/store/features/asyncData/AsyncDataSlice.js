import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const inititialData = {
    loading: false,
    data: {},
    error: ''

}
export const FetchData = createAsyncThunk('AsyncData/fetchData', async(params) => {

    let res = await axios("https://jsonplaceholder.typicode.com/users")
    res = res.data
    return res;
})


const AsyncDataSlice = createSlice({
    name: 'AsyncData',
    initialState: inititialData,
    reducers: {
        // synchronous actions are handles here
    },
    extraReducers: {
        // asychronous actions are handled here
        [FetchData.pending]: (state) => {
            state.loading = true;
        },
        [FetchData.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.data.users = payload
            state.error = ""

        },
        [FetchData.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error
        }
    }

})

export default AsyncDataSlice.reducer