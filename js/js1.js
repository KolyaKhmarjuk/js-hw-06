const listEl = document.querySelectorAll('.item');
console.log(`Numbers of categories: ${listEl.length}`);

const liItem = [...listEl];
// console.log(liItem);
const elems = liItem.map(item => {
     const titleEl = item.firstElementChild.textContent;
    console.log(`Category: ${titleEl}`)

    const lengthElems = item.lastElementChild.children.length;
    console.log(`Elements: ${lengthElems}`)
    
})





