const plus = document.getElementById("plus");
const number = document.getElementById("number");
const minus = document.getElementById("minus");

let count = 0;

const updateText = () => {
  number.innerHTML = count;
};

const onPlus = (e) => {
  count = count + 1;
  updateText();
};

const onMinus = (e) => {
  count = count - 1;
  updateText();
};

const init = () => {
  updateText();
  plus.addEventListener("click", onPlus);
  minus.addEventListener("click", onMinus);
};

init();
