let  counterValue = 0;
const incrementEl = document.querySelector('[data-action="increment"]');
const decrementEl = document.querySelector('[data-action="decrement"]');
const counterEl = document.querySelector('#value');

decrementEl.addEventListener('click', () => {
	counterValue -=1 ;
  
  counterEl.textContent = counterValue;
});
 incrementEl.addEventListener('click', () => {
	counterValue += 1;
  
  counterEl.textContent = counterValue;
})
