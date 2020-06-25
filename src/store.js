const { createStore } = require("redux");

const ADD = "ADD";
const REMOVE = "REMOVE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const removeToDo = (id) => {
  return {
    type: REMOVE,
    id,
  };
};

const reducer = (state = [], action) => {
  const { type, text, id } = action;
  switch (type) {
    case ADD:
      return [{ text, id: Date.now() }, ...state];
    case REMOVE:
      return state.filter((toDo) => toDo.id !== parseInt(id));
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  removeToDo,
};

export default store;
