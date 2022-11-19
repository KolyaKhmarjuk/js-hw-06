const inputText = document.querySelector('#name-input');
console.log(inputText);
const valueInputText = document.querySelector('#name-output');
console.log(valueInputText);

inputText.addEventListener('input', (event) => {
    valueInputText.textContent = event.currentTarget.value;
})

