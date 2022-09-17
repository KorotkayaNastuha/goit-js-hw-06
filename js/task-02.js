const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
function addIngredients(ingredients) {
  let ingredientsList = []
  for (const ingredient of ingredients) {
    const ingredientsEl = document.createElement('li');
    ingredientsEl.classList.add('item');
    ingredientsEl.textContent = ingredient;
    ingredientsList.push(ingredientsEl);
  };
  return document.querySelector('#ingredients').append(...ingredientsList)
}
(addIngredients(ingredients))
 