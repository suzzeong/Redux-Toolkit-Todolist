import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todosSlice";

export const store = configureStore({
  reducer: {
		todos: todos
  },
});

// export default store;