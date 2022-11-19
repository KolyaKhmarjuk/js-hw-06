const incrBtn = document.querySelector('#counter button[data-action="increment"]');
const decrBtn = document.querySelector('#counter button[data-action="decrement"]');
const valueEl = document.querySelector('#value');
console.log(incrBtn);
console.log(decrBtn);
console.log(valueEl);

let counterValue = 0;



function clickIncr() {
    counterValue += 1;
    console.log('click+')
    valueEl.textContent = counterValue;
}
function clickDecr() {
    counterValue -= 1;
    console.log('click-')
    valueEl.textContent = counterValue;
}



incrBtn.addEventListener('click', clickIncr);
decrBtn.addEventListener('click', clickDecr);

