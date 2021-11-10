const navbar = document.getElementById('navbar');

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

// Legger til bilde og tekst til nav-bar
let a = document.createElement('a');
a.href = 'index.html';
let container = document.createElement('div');

let logo = document.createElement('img');
logo.src = navLinks[0].source;
container.appendChild(logo);

let logoText = document.createElement('p');
let textNode = document.createTextNode(navLinks[0].text);
logoText.appendChild(textNode);
container.appendChild(logoText);

a.appendChild(container);
navbar.appendChild(a);

// Lager et ul-element i navbar
let ulist = document.createElement('ul');
navbar.appendChild(ulist);

// Legger til alle sidene som li-elementer i ul-elementet
for (let i = 1; i < navLinks.length; i++) {
  let list = document.createElement('li');
  let a = document.createElement('a');
  let content = document.createTextNode(navLinks[i].name);
  a.href = navLinks[i].link;
  a.appendChild(content);
  list.appendChild(a);
  ulist.appendChild(list);
}

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
