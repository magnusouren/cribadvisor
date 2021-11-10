function validateInput() {
  const nameInput = document.getElementById('name').value;
  const emailInput = document.getElementById('email').value;
  const messageInput = document.getElementById('message').value;

  const validName = validateName(nameInput);
  const validEmail = validateEmail(emailInput);
  const validMessage = validateMessage(messageInput);

  if (validName && validEmail && validMessage) {
    alert('Takk for din melding!');
  }
}

function validateName(name) {
  if (name.length === 0) {
    alert('Skriv inn navnet ditt');
    return false;
  }

  return true;
}

function validateEmail(email) {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isEmail = emailRegex.test(email.toLowerCase());

  if (isEmail === false) {
    alert('Skriv inn en godkjent email adresse');
    return false;
  }

  return true;
}

function validateMessage(message) {
  if (message.length === 0) {
    alert('Skriv inn melding');
    return false;
  } else if (message.length > 300) {
    alert('Meldingen din er for lang');
    return false;
  }

  return true;
}

window.onload = function () {
  const button = document.getElementById('button');
  button.addEventListener('click', validateInput);
};
