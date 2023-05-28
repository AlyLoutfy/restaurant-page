function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");
  home.appendChild(createParagraph("Dough and Co's unique combination of a casual-cool setting, charming service, and its creative twist on homestyle Italian fare has kept both locals and a celebrity-studded clientele coming back for more. Quite simply, Dough and Co has become one of the world’s favorite restaurants."));

  home.appendChild(createParagraph("Where everyone feels at home"));

  return home;
}


function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;