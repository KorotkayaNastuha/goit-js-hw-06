function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');
const boxesEl = document.getElementById('#boxes');
const amountEl = document.querySelector('#controls > input');

createEl.addEventListener('click', createBoxes);
destroyEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const divElemToAdd = [];
  amount = amountEl.value
  for (let i = 0; i < amount; i+=1) {
    const elem = document.createElement('div');
    elem.style.background = getRandomHexColor()
    elem.style.height = `{30 + 10}px`
    elem.style.weight = `{30 + 10}px`
    divElemToAdd.push(div)
  }
  return divElemToAdd
}
function destroyBoxes() {
  boxesEl.innerHTML = '';
  amountEl.value = 0;
}