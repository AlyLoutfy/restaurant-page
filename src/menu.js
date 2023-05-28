function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(createPizza("Vegetables"));
  menu.appendChild(createPizza("Vegetables"));
  menu.appendChild(createPizza("Vegetables"));
  menu.appendChild(createPizza("Vegetables"));
  menu.appendChild(createPizza("Vegetables"));
  menu.appendChild(createPizza("Vegetables"));

  return menu;
}

function createPizza(name) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  menuItem.textContent = `${name}`;

  const pizzaImg = document.createElement("img");
  pizzaImg.src = `../src/assets/margherita.png`
  pizzaImg.alt = `${name}`;

  menuItem.appendChild(pizzaImg);


  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;