// src/redux/modules/todosSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    todos: [],
    isLoading: false,
    error: null,
};

export const __getTodos = createAsyncThunk(
    "todos/getTodos",
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get("http://localhost:3001/todos");
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const __deleteTodos = createAsyncThunk(
    "todos/deleteTodos",
    async (payload, thunkAPI) => {
        // console.log(id)
        try {
             await axios.delete(`http://localhost:3001/todos/${payload}`);
            // return thunkAPI.fulfillWithValue(payload);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: {
        [__getTodos.pending]: (state) => {
            state.isLoading = true;
        },
        [__getTodos.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.todos = action.payload;
        },
        [__getTodos.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [__deleteTodos.pending]: (state) => {
            state.isLoading = true;
        },
        [__deleteTodos.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.todos.filter((todo) => todo.id !== action.payload)
        },
        [__deleteTodos.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;