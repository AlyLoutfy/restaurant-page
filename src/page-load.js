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

  const menu = document.createElement("a");
  menu.textContent = "Menu";

  const contact = document.createElement("a");
  contact.textContent = "Contact";

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return nav;
}

function initWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
}

export default initWebsite;