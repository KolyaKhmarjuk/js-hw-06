const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elems = document.querySelector('#ingredients');

const ingrElems = ingredients.map(ingredient => {
    const ingrElem = document.createElement('li');
    ingrElem.textContent = ingredient;
    return ingrElem;
}
);


elems.append(...ingrElems);