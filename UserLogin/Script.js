const loginForm = document.getElementById("login-form")
const successMessage = document.getElementById("success-message")

loginForm.addEventListener("submit", function (e){
    e.preventDefault()
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if(username === 'pepito' && password === '12345'){
        successMessage.style.display = "block";
        successMessage.textContent = 'Inicio de sesión correcto';
    }else{
        alert('Usuario o contraseña incorrectos')
    }
})