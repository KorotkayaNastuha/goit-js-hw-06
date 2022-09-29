function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');
const boxesEl = document.getElementById('#boxes');
const amountEl = document.querySelector('#controls > input');

destroyEl.addEventListener('click', destroyBoxes);
createEl.addEventListener('click', createBoxes); 


function createBoxes(amount) {
  const boxes = [];
  amount = amountEl.value
  for (let i = 0; i < amount; i+=1) {
    const elem = document.createElement('div');
    elem.style.background = getRandomHexColor()
    elem.style.height = `${30 + i *10}px`
    elem.style.weight = `${30 + i *10}px`
    boxes.push(elem);
   
  }
  boxesEl.appendChild(boxes);
}
function destroyBoxes() {
  boxesEl.innerHTML = "";
  amountEl.value = 0;
  
}
