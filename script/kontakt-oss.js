function validateInput() { 
    let nameInput = document.getElementById('name').value;
    let emailInput = document.getElementById('email').value;
    let messageInput = document.getElementById('message').value;

    validateName(nameInput);
    validateEmail(emailInput);
    validateMessage(messageInput);
}

function validateName(name) {
    if (name.length === 0) {
        alert("Skriv inn navnet ditt");
    }
}

function validateEmail(email) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmail = emailRegex.test(email.toLowerCase());

    if (isEmail === false) {
        alert("Skriv inn en godkjent email adresse");
    }
}

function validateMessage(message) {
    if (message.length === 0) {
        alert("Skriv inn melding");
    } else if (message.length > 300) {
        alert("Meldingen din er for lang");
    }
}


