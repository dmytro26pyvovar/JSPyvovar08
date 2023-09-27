import throttle from "lodash.throttle"
function saveData() {
    const userData = {
        email: document.querySelector('input[name="email"]').value,
        message: document.querySelector('textarea[name="message"]').value,
    };
    localStorage.setItem('feedback-form',JSON.stringify(formData));
};

function loadFormDataFromLocalStorage() {
    const savedData = localStorage.getItem('feedback-form');
    if (savedData) {
        const formData = JSON.parse(savedData);
        document.querySelector('input[name="email"]').value = userDataData.email;
        document.querySelector('textarea[name="message"]').value = userDataData.message;
    };


function handleSubmit(event) {
    event.preventDefault();
    const formData = {
        email: document.querySelector('input[name="email"]').value,
        message: document.querySelector('textarea[name="message"]').value,
    };
    console.log(formData);
};

localStorage.removeItem('feedback-form');

document.querySelector('input[name="email"]').value = '';
document.querySelector('textarea[name="message"]').value = '';

};

const form = document.querySelector('feedback-form');
form.addEventListener('input', throttle(saveFormDataToLocalStorage, 500));
form.addEventListener('submit', handleSubmit);

