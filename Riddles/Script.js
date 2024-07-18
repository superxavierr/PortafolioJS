const riddles = [
  {
    //Esta constante contiene un arreglo con adivinanzas.
    question: "Es peludo pero no es un peluche ¿Qué es?",
    answer: "oso",
  },

  {
    question: "Calienta pero no es fuego ¿Qué es?",
    answer: "sol",
  },

  {
    question: "gruñe pero no es perro ni gato ¿Qué es?",
    answer: "caracal",
  }];

let currentRiddle;
let correctAnswer = 0;

function loadNewRiddle() {//Esta función sirve para mostrar la adivinanza en pantalla.
  currentRiddle = riddles[Math.floor(Math.random() * riddles.length)]; //Selecciona una adivinanza al azar con la función random y al ser combinada con la función floor y la longitud del arreglo se vuelve incluso más aleatoria.
  document.getElementById("riddle").innerText = currentRiddle.question;
}

document.addEventListener("DOMContentLoaded", function () {
  loadNewRiddle();
});

function checkAnswer() {//Esta función es para corroborar que la respuesta coincida.
  const userAnswer = document.getElementById("answer-input").value.toLowerCase();//Esta línea es para obtener lo que insertamos y convertirlo a minúsculas
  if (userAnswer === currentRiddle.answer) { //Esta condicional es para comparar la respuestra insertada por el usuario con la respuesta correcta.
    document.getElementById("result").innerText = "¡Correcto!"; //En este caso mostrará si es correcta y de color verde el texto.
    document.getElementById("result").style.color = "green";
    correctAnswer++; //De ser correcta, aumentará en 1 el número de aciertos al contador.
    document.getElementById("correctCount").innerText = correctAnswer;
    loadNewRiddle();//Y con ayuda de la función antes vista, nos mostrará otra adivinanza.
  } else {
    document.getElementById("result").innerText = "¡Incorrecto!";//En este caso de lo contrario mostrará si es incorrecta y de color rojo el texto.
    document.getElementById("result").style.color = "red";
  }
}
