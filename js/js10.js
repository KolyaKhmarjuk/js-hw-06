// function getRandomHexColor() {
//     return `#${ Math.floor(Math.random() * 16777215).toString(16) }`;
// }


// const refs = {
//   divFormRef: document.querySelector('#controls'),
//   inputRef: document.querySelector('input'),
//   buttonsRef: document.querySelectorAll('button'),
//   divBoxRef: document.querySelector('#boxes'),
// };

// refs.buttonsRef[0].addEventListener('click', createBoxes)
// refs.buttonsRef[1].addEventListener('click', destroyBoxes)

// function destroyBoxes() {
//     refs.divBoxRef.replaceChildren();
// }



// function createBoxes() {
//   const amount = Number(refs.inputRef.value);
    

//     const baseSizeDiv = 30;
    
//     for (let i = 0; i < amount; i += 1){
//       const colorBgBox = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//       const newDiv = document.createElement('div');
//       newDiv.style.width = `${baseSizeDiv + i * 10}px`;
//       newDiv.style.height = `${baseSizeDiv + i * 10}px`;
//         newDiv.style.backgroundColor = `${colorBgBox}`;



  //   refs.divBoxRef.append(newDiv);
  //   }
  // }

const refs = { 
  divFormRef: document.querySelector('#controls'),
  inputRef: document.querySelector('input'),
  buttonCreateRef: document.querySelector('[data-create]'),
  buttonDestroyRef: document.querySelector('[data-destroy]'),
  divBoxRef: document.querySelector('#boxes'),
}

refs.buttonCreateRef.addEventListener('click', createBoxes);
refs.buttonDestroyRef.addEventListener('click', destroyDiv);

function getRandomHexColor() {
    return `#${ Math.floor(Math.random() * 16777215)
      .toString(16) 
      .padStart(6, 0)}`;
}

function createBoxes() {
  const amount = Number(refs.inputRef.value)
  const BASE_DIV_SIZE = 30
  const divCollections = []

  for (let i = 0; i < amount; i += 1){
    const newDiv = document.createElement('div')
    const divSize = BASE_DIV_SIZE + i * 10
    newDiv.style = `width:${divSize}px; height:${divSize}px; background-color: ${getRandomHexColor()}`

    divCollections.push(newDiv)
  }

  refs.divBoxRef.append(...divCollections)
}

function destroyDiv() {
  refs.divBoxRef.replaceChildren()
}