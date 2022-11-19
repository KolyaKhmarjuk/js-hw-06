const inputEl = document.querySelector('#font-size-control');
console.dir(inputEl.value)
const spanText = document.querySelector('#text');
console.log(spanText);

// spanText.style.fontSize = `${inputEl.value}px`


inputEl.addEventListener('mousemove', () => {
    spanText.style.fontSize = `${inputEl.value}px`
})
