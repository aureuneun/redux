const { createStore } = require("redux");

const plus = document.getElementById("plus");
const number = document.getElementById("number");
const minus = document.getElementById("minus");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const reducer = (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return count + 1;
    case DECREMENT:
      return count - 1;
    default:
      return count;
  }
};

const store = createStore(reducer);

const onChange = () => (number.innerHTML = store.getState());
const onIncrement = () => store.dispatch({ type: INCREMENT });
const onDecrement = () => store.dispatch({ type: DECREMENT });

const init = () => {
  store.subscribe(onChange);
  plus.addEventListener("click", onIncrement);
  minus.addEventListener("click", onDecrement);
};

init();
