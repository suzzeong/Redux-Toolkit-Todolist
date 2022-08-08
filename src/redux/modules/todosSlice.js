import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    todos : [],
    isLoading : false,
    error : null,
}

export const __getTodos = createAsyncThunk(
    "todos/getTodos",
    async(payload, thunkAPI) => {
        try{
            const data = await axios.get("http://localhost:3001/todos");
            console.log(data);
        }catch(error) {
            console.log(error)
        }
    }
);

const todosSlice = createSlice({
    name : "todos",
    initialState,
    reducers:{}
})

export const {} = todosSlice.actions;
export default todosSlice.reducer;