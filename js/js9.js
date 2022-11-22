const refs = {
    widget: document.querySelector('.widget'),
    btnColor: document.querySelector('.change-color'),
    spanText: document.querySelector('.color'),
}

function getRandomHexColor() {
  return `#${ Math.floor(Math.random() * 16777215)
    .toString(16) 
    .padStart(6, 0)}`;
}



function randomColorBg() {
  const RandomColor = getRandomHexColor();
  refs.spanText.textContent = RandomColor;
  refs.widget.parentElement.style.backgroundColor = `${RandomColor}`;
}

refs.btnColor.addEventListener('click', randomColorBg);


