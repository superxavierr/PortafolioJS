const data = {//Esta es una constante con un arreglo que contiene toda la información del perfil.
  name: "Artemisa",
  description: "Gatubela de noche, me gusta el atún, hermana mayor de Minerva, mi novio es un michi que me visita por la ventana de la cocina 🥰.",
  birthday: "08/07/2021",
  genre: "Hembra",
  breed: "Tabby/Europeo Común",
  email: "artemisa@gmail.com",
  tel: "3333333333",
};

function loadUserProfile(data) {//Esta es una función que carga toda la información del arreglo.
  document.getElementById("userName").textContent = data.name;
  document.getElementById("description").textContent = data.description;
  document.getElementById("userBirth").textContent = data.birthday;
  document.getElementById("userGenre").textContent = data.genre;
  document.getElementById("userBreed").textContent = data.breed;
  document.getElementById("userEmail").textContent = data.email;
  document.getElementById("userTel").textContent = data.tel;
}

document.addEventListener("DOMContentLoaded", function () {//Esta funión complementa a la función anterior.
  loadUserProfile(data);
});