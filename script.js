const messageEl = document.getElementById("result");
const errorEl = document.getElementById("error");
const numb1 = document.getElementById("numb1");
const numb2 = document.getElementById("numb2");
const buttonEl = document.getElementById("clickBtn");
buttonEl.addEventListener("click", getSum);

function getSum() {
  value1 = Number(numb1.value);
  value2 = Number(numb2.value);
  checkNumber(value1, value2);
  return (messageEl.textContent = value1 + value2);
}

function getNumber() {}

function checkNumber(value1, value2) {
  if (isNaN(value1) || isNaN(value2)) {
    return (errorEl.textContent = `You are wrong!`);
  } else return true;
}
