const navbar = document.getElementById("navbar");

const listelements = [
  {
    source: "img/others/logo.png",
    text: "CribAdvisor",
  },
  {
    name: "Hjem",
    link: "index.html",
  },
  {
    name: "Hybler",
    link: "hybler.html",
  },
  {
    name: "Kontakt Oss",
    link: "hybler.html",
  },
  {
    name: "Legg til hybel",
    link: "hybler.html",
  },
];

let container = document.createElement("div");

let logo = document.createElement("img");
logo.src = listelements[0].source;
container.appendChild(logo);

let logoText = document.createElement("h1");
let textNode = document.createTextNode(listelements[0].text);
logoText.appendChild(textNode);
container.appendChild(logoText);

navbar.appendChild(container);

//lager et ul-element i navbar
let ulist = document.createElement("ul");
navbar.appendChild(ulist);

for (let i = 1; i < listelements.length; i++) {
  let list = document.createElement("li");
  let a = document.createElement("a");
  let content = document.createTextNode(listelements[i].name);
  a.href = listelements[i].link;
  a.appendChild(content);
  list.appendChild(a);
  ulist.appendChild(list);
}
