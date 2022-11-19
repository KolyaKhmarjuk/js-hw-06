const refs = {
    widget: document.querySelector('.widget'),
    btnColor: document.querySelector('.change-color'),
    spanText: document.querySelector('.color'),
}




function getRandomHexColor() {
  const RandomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  refs.spanText.textContent = RandomColor;
  refs.widget.parentElement.style.backgroundColor = `${RandomColor}`;
}

refs.btnColor.addEventListener('click', getRandomHexColor);


