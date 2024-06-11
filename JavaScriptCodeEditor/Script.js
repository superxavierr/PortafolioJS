const codeEditor = document.getElementById("code-editor")
const outputDiv = document.getElementById("output")
const runButton = document.getElementById("run-button")

runButton.addEventListener("click", runCode) //Esta función con el botón manda a ejecutar el código ya escrito.

function runCode(){ //Esta función es la que ejecuta el código ya escrito.
    const code = codeEditor.value; //Está línea obtiene el código y lo manda...

    try{
            const result = eval(code) //a evaluar en esta otra línea.
            outputDiv.textContent = result

    } catch (error){ //dependiendo de la salida del código, si está bien se ejecuta y si no envía este mensaje de error.
            outputDiv.textContent = `Error: ${error.message}`

    }
}