function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');
const body = document.querySelector('body')

buttonEl.addEventListener('click', onChangeColor)
function onChangeColor() {
  body.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = body.style.backgroundColor;
}
