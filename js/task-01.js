const categoriesEl = document.querySelectorAll('li.item');
console.log(`Number of categories :${categoriesEl.length} `);

const titleEl = document.querySelectorAll('#categories>li');
titleEl.forEach(el => {

  console.log(
      `Category: ${el.firstElementChild.textContent}, 
    Elements: ${el.lastElementChild.children.length}`,
  );
});