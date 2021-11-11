/**
 * Funksjon som henter og validerer input fra kontakt.html siden.
 *
 * Dersom inputene ikke er gyldig blir brukeren varslet.
 */
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

/**
 * Funksjon som validerer navn-input
 * Alerter bruker dersom ingen input er gitt.
 *
 * @param {string} name Navn-input
 * @return {boolean} true/false verdi basert på om input er gyldig
 */
function validateName(name) {
  if (name.length === 0) {
    alert('Skriv inn navnet ditt');
    return false;
  }

  return true;
}

/**
 * Funksjon som validerer email input.
 * Bruker regex for å validerer input.
 *
 * @param {string} email email-input
 * @return {boolean} true/false verdi basert på om input er gyldig
 */
function validateEmail(email) {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isEmail = emailRegex.test(email.toLowerCase());

  if (isEmail === false) {
    alert('Skriv inn en godkjent email adresse');
    return false;
  }

  return true;
}

/**
 * Funksjon som validerer melding fra bruker.
 * Alerter bruker dersom ingen input er gikk eller
 * Dersom meldingen er for lang.
 *
 * @param {string} message melding-input
 * @return {boolean} true/false verdi basert på om input er gyldig
 */
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

/**
 * Setter event listener når siden er lastet inn
 */
window.onload = function () {
  const button = document.getElementById('button');
  button.addEventListener('click', validateInput);
};
