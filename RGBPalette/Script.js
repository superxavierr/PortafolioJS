const rRange = document.getElementById("rRange")
const gRange = document.getElementById("gRange")
const bRange = document.getElementById("bRange")
const colorDisplay = document.getElementById("colorDisplay")
const rgbValue = document.getElementById("rgbValue")

function updateColor(){ 
    const r = rRange.value;
    const g = gRange.value;
    const b = bRange.value;

    const rgbStr = `RGB(${r}, ${g}, ${b})` //Esta función nos muestra los valores de rango RGB en pantalla.
    colorDisplay.style.backgroundColor = rgbStr //Esta función nos muestra el color obtenido en pantalla.
    rgbValue.textContent = rgbStr //Esta función almacena los valores de rango RGB para poder copiarlos.
}

rRange.addEventListener("input", updateColor)
gRange.addEventListener("input", updateColor)
bRange.addEventListener("input", updateColor)

updateColor() //Este método nos permite actualizar el color que se ve en pantalla.

const copyButton = document.getElementById("copyButton")

copyButton.addEventListener("click", ()=>{ //Esta funciónn nos permite realizar la acción del botón copiar (es una api).

    navigator.clipboard.writeText(rgbValue.textContent)
    .then(()=>{
        alert('Color copiado al portapapeles')
    })

    .catch(err =>{
        console.log('Error al copiar texto', err)
        alert('No se pudo copiar el texto')
    })

})