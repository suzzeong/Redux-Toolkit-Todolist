import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todos";

export const store = configureStore({
  reducer: {
		todos
  },
});

// export default store;