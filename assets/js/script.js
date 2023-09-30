const submitBtn = document.querySelector('.submit-btn');
const phone = document.querySelector('#phone');
const email = document.querySelector('#mail');
const errorDisplayers = document.getElementsByClassName('error');
const inputFields = document.querySelectorAll('input');

let count = 2;

function onValidation(current, messageString, booleanTest) {
    let message = current;
    message.textContent = messageString;
    booleanTest !== 0 ? ++count : count; // Use strict comparison (!==)
}

for (let i = 0; i < inputFields.length; i++) {
    let currentInputField = inputFields[i];
    let currentErrorDisplayer = errorDisplayers[i];

    currentInputField.addEventListener('keyup', (e) => {
        let message = currentErrorDisplayer;
        e.target.value !== "" ? onValidation(currentErrorDisplayer, '', 0) : onValidation(currentErrorDisplayer, '*This field is Required', 0);
    });
}

phone.addEventListener('keyup', (e) => {
    let message = errorDisplayers[1];
    e.target.value === e.target.value.replace(/\D/g, '') ? onValidation(message, '', 1) : onValidation(message, '*Please enter a valid number', 0); // Use strict comparison (===)
});

email.addEventListener('keyup', (e) => {
    let message = errorDisplayers[0];
    mail.value.includes('@') && mail.value.includes('g.ens-kouba.dz') ? onValidation(message, '', 1) : onValidation(message, '*Please provide a valid Email', 0); // Use && for logical AND
});

