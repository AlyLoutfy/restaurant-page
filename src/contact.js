function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const section = document.createElement("div");
  section.textContent = "Visit us any day from 9am till 10pm.";
  contact.appendChild(section);

  const section2 = document.createElement("div");
  section2.textContent = "Address: Mystery";
  contact.appendChild(section2);

  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;