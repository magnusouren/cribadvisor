const navbar = document.getElementById('navbar');

const listelements = [
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
//legger til bilde og tekst til nav-bar
let a = document.createElement('a');
a.href = 'index.html';
let container = document.createElement('div');

let logo = document.createElement('img');
logo.src = listelements[0].source;
container.appendChild(logo);

let logoText = document.createElement('p');
let textNode = document.createTextNode(listelements[0].text);
logoText.appendChild(textNode);
container.appendChild(logoText);

a.appendChild(container);
navbar.appendChild(a);

//lager et ul-element i navbar
let ulist = document.createElement('ul');
navbar.appendChild(ulist);

//legger til alle sidene som li-elementer i ul-elementet
for (let i = 1; i < listelements.length; i++) {
  let list = document.createElement('li');
  let a = document.createElement('a');
  let content = document.createTextNode(listelements[i].name);
  a.href = listelements[i].link;
  a.appendChild(content);
  list.appendChild(a);
  ulist.appendChild(list);
}

//henter filnavnet på aktiv fil
const pathname = window.location.pathname;

//setter stil på aktiv lenke til mørkere med understrek
for (let i = 0; i < listelements.length - 1; i++) {
  let aTagHref = document
    .getElementById('navbar')
    .getElementsByTagName('a')
    [i].getAttribute('href');
  if (pathname.includes(aTagHref)) {
    document.getElementById('navbar').getElementsByTagName('a')[i].className =
      'selected';
  }
}
