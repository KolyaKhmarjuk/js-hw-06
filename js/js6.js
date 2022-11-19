const inputEl = document.querySelector('#validation-input');
console.dir(inputEl);

inputEl.addEventListener('blur', () => {
    const textLength = inputEl.value.split("").length;
    console.log(textLength)
    const lengthData = inputEl.attributes[2].value;
    console.log(lengthData)


    if (textLength >= lengthData) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    }

    if (textLength < lengthData) {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    }
})

console.log(inputEl.textContent)
