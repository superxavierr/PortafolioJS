const fileInput = document.getElementById("fileInput");
const audioElement = document.getElementById("audioElement");

fileInput.addEventListener("change", function () { //Esta función nos permite leer el archivo.
  const file = this.files[0]; //Esta línea se refiere al archivo que ingresamos.
  if (file) { //Si lee el archivo correspondiente, se empezará a reproducir.
    const objectURL = URL.createObjectURL(file);
    audioElement.src = objectURL; //Esta línea representa el contenido seleccionado y lo permite descargar.
    }
});
