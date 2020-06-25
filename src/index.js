const { createStore } = require("redux");

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const removeToDo = (id) => {
  return {
    type: REMOVE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  const { type, text, id } = action;
  switch (type) {
    case ADD_TODO:
      return [{ text, id: Date.now() }, ...state];
    case REMOVE_TODO:
      return state.filter((toDo) => toDo.id !== parseInt(id));
    default:
      return state;
  }
};

const store = createStore(reducer);

const addToDoWithDispatch = (text) => {
  store.dispatch(addToDo(text));
};

const removeToDoWithDispatch = (e) => {
  const {
    path: [, { id }],
  } = e;
  store.dispatch(removeToDo(id));
};

const paintToDos = () => {
  ul.innerHTML = "";
  const toDos = store.getState();
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    li.innerHTML = toDo.text;
    li.id = toDo.id;
    btn.innerHTML = "X";
    btn.addEventListener("click", removeToDoWithDispatch);
    li.prepend(btn);
    ul.appendChild(li);
  });
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  addToDoWithDispatch(toDo);
};

const init = () => {
  store.subscribe(() => console.log(store.getState()));
  store.subscribe(paintToDos);
  form.addEventListener("submit", onSubmit);
};

init();
