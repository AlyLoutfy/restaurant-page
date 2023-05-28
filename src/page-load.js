import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const title = document.createElement("h1");
  title.textContent = "Dough & Co";
  header.appendChild(title);

  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("div");
  nav.classList.add("nav");

  const home = document.createElement("a");
  home.textContent = "Home";
  nav.appendChild(home);
  home.addEventListener("click", loadHome);

  const menu = document.createElement("a");
  menu.textContent = "Menu";
  nav.appendChild(menu);
  menu.addEventListener("click", loadMenu);

  const contact = document.createElement("a");
  contact.textContent = "Contact";
  nav.appendChild(contact);
  contact.addEventListener("click", loadContact);

  return nav;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function initWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(loadHome());
}

export default initWebsite;