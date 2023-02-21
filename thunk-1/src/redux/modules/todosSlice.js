// src/redux/modules/todosSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
