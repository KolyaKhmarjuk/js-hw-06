const form = document.querySelector('.login-form');

form.addEventListener('submit', formElem);

function formElem(event) {
    event.preventDefault();

    const formItemElem = event.currentTarget.elements;
    const mail = formItemElem.email.value;
    const password = formItemElem.email.value;

     if (!mail || !password) {
        return alert('Поля должны быть заполнены!');
    };

    form.reset();
}



