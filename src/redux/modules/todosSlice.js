import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
  comments:[],
};

export const __getTodos = createAsyncThunk("todos/getTodos", async (payload, thunkAPI) => {
  try {
    const data = await axios.get("http://localhost:3001/todos");
    console.log('data=>',data);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __deleteTodos = createAsyncThunk("todos/deleteTodos", async (payload, thunkAPI) => {
  try {
    await axios.delete(`http://localhost:3001/todos/${payload}`);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __postTodos = createAsyncThunk("todos/postTodos", async (payload, thunkAPI) => {
  try {
    await axios.post("http://localhost:3001/todos", payload);
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) { }
});

export const __putTodos = createAsyncThunk("todos/putTodos", async (payload, thunkAPI) => {
  console.log(payload.content)
  try {
    const data = await axios.patch(`http://localhost:3001/todos/${payload.id}`, payload.content);
    console.log(data)
    // return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    // return thunkAPI.rejectWithValue(error);
  }
});

export const __postComment = createAsyncThunk('comments/postComment', async (payload, thunkAPI) => {
  try {
    const data = await axios.post('http://localhost:3001/comments', payload);
    // return thunkAPI.fulfillWithValue(payload);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue("ERROR=>", error);
  }
});

export const __getComments = createAsyncThunk("comments/getComments", async (payload, thunkAPI) => {
  try {
    const data = await axios.get('http://localhost:3001/comments');
    console.log(data.data);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __deleteComment = createAsyncThunk("comments/delteComments", async (payload, thunkAPI) => {
  console.log("__deleteComment=>",payload);
  try {
    await axios.delete(`http://localhost:3001/comments/${payload}`);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});




export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
      console.log(action.payload);
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
      console.log(action);
      // state.todos.filter((todo) => todo.id !== action.payload);
    },
    [__deleteTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__postTodos.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__postTodos.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos.push(action.payload); // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__postTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__putTodos.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__putTodos.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = action.payload // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__putTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__postComment.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__postComment.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments.push(action.payload); // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__postComment.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      console.log(state)
      console.log(state.todos)
      console.log(state.comments)
      console.log(state.todos.comments)
      console.log(action)
      console.log(action.payload)
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },



    
  },
});

export const { } = todosSlice.actions;
export default todosSlice.reducer;
