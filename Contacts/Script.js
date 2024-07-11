document.getElementById("contactForm").addEventListener("submit", function (e) { //Esta función es todo el proceso que realiza el formulario.
  e.preventDefault();
  const name = document.getElementById("contactName").value;
  const birth = document.getElementById("contactBirthday").value;
  const tel = document.getElementById("contactTel").value;
  const mail = document.getElementById("contactMail").value;
  const address = document.getElementById("contactAddress").value;

  //Obtiene y muestra conforme hayan sidoinsertados los valores en el formulario.
  let contactText = `◉Nombre: ${name}`;
  if (tel) contactText += ` ◉Teléfono: ${tel}`;
  if (birth) contactText += ` ◉Cumpleaños: ${birth}`;
  if (mail) contactText += ` ◉Correo: ${mail}`;
  if (address) contactText += ` ◉Dirección: ${address}`;

  const listItem = document.createElement("li");
  listItem.textContent = contactText;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Eliminar";
  deleteBtn.addEventListener("click", function () { //Esta función muestra el botón de eliminar cada que se inserta un nuevo registro para poder eliminarlo.
    listItem.remove();
  });
  listItem.appendChild(deleteBtn);
  document.getElementById("contactList").appendChild(listItem); //Actualiza la lista de contactos.
  document.getElementById("contactForm").reset(); //Resetea el formulario cada que se inserta un nuevo registro.
});

document.getElementById("searchInput").addEventListener("input", function (e) {//Esta función realiza la búsqueda de un registro por el nombre.
  const searchTerm = e.target.value.toLowerCase();
  const contacts = document.querySelectorAll("#contactList li");

  contacts.forEach((contact) => {
    if (contact.textContent.toLowerCase().includes(searchTerm)) {
      contact.style.display = "";
    } else {
      contact.style.display = "none";
    }
  });
});
