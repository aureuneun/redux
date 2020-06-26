import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const removeToDo = createAction("REMOVE");

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [removeToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== parseInt(action.payload)),
});

const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  removeToDo,
};

export default store;
