// Henter navbar med id navbar
const navbar = document.getElementById('navbar');

/**
 * Liste med alle linkene i navbaren.
 * Lagret som objekter med navn og link-url
 */
const navLinks = [
  {
    source: 'img/others/logo-white.png',
    text: 'CribAdvisor',
  },
  {
    name: 'Hjem',
    link: 'index.html',
  },
  {
    name: 'Hybler',
    link: 'hybler.html',
  },
  {
    name: 'Kontakt Oss',
    link: 'kontakt-oss.html',
  },
  {
    name: 'Legg til hybel',
    link: 'legg-til-hybel.html',
  },
];

// Lager link som skal wrappe rundt logo
let a = document.createElement('a');
a.href = 'index.html';

// Container som wrapper rundt logo og tekst
let container = document.createElement('div');

// Lager logo og putter det i containeren
let logo = document.createElement('img');
logo.src = navLinks[0].source;
container.appendChild(logo);

// Lager logo tekst og putter det inn i containeren
let logoText = document.createElement('p');
let textNode = document.createTextNode(navLinks[0].text);
logoText.appendChild(textNode);
container.appendChild(logoText);

// Wrapper linken rundt containeren og
// Putter linken inn i navbaren
a.appendChild(container);
navbar.appendChild(a);

// Lager et ul-element som skal wrappe rundt alle linkene
let ulist = document.createElement('ul');

// Legger til alle linkene som li-elementer i ul-elementet
for (let i = 1; i < navLinks.length; i++) {
  let list = document.createElement('li');
  let a = document.createElement('a');
  let content = document.createTextNode(navLinks[i].name);
  a.href = navLinks[i].link;
  a.appendChild(content);
  list.appendChild(a);
  ulist.appendChild(list);
}

// Putter lista inn i navbaren
navbar.appendChild(ulist);

// Henter filnavnet på aktiv fil
const pathname = window.location.pathname;

// Setter stil på aktiv lenke
for (let i = 1; i < navLinks.length; i++) {
  let aTagHref = document
    .getElementById('navbar')
    .getElementsByTagName('a')
    [i].getAttribute('href');
  if (pathname.includes(aTagHref)) {
    document.getElementById('navbar').getElementsByTagName('a')[i].className =
      'selected';
  }
}
