const form = document.querySelector('.login-form');

function formElem(event) {
    event.preventDefault();

    const formItemElem = event.currentTarget.elements;

    const mail = formItemElem.email.value;
    const password = formItemElem.email.value;


    const formAllData = {
        mail,
        password,
    };

     if (mail === "" || password === "") {
        return alert('Поля должны быть заполнены!');
    };


    console.log(formAllData);

    form.reset();
}

form.addEventListener('submit', formElem);

