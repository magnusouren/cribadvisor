const navbar = document.getElementById("navbar");

let ulist = document.createElement("ul");
navbar.appendChild(ulist);

//const listelements = ["Hjem", "Hybler", "Kontkat oss", "Legg til hybel"];

const listelements = [
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

for (let i = 0; i < listelements.length; i++) {
  let list = document.createElement("li");
  let a = document.createElement("a");
  let content = document.createTextNode(listelements[i].name);
  //a.href = "https://www.vg.no";
  a.href = listelements[i].link;
  a.appendChild(content);
  list.appendChild(a);
  ulist.appendChild(list);
}
