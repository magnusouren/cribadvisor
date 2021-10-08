const navbar = document.getElementById("navbar");

//lager et ul-element i navbar
let ulist = document.createElement("ul");
navbar.appendChild(ulist);

const listelements = [
  {
    src="img/others/logo.png",
    text="CribAdvisor",
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

for (let i = 1; i < listelements.length; i++) {
  let list = document.createElement("li");
  let a = document.createElement("a");
  let content = document.createTextNode(listelements[i].name);
  a.href = listelements[i].link;
  a.appendChild(content);
  list.appendChild(a);
  ulist.appendChild(list);
}
