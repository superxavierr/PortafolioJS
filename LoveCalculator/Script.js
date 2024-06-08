function calculateLove(){
    const name1 = document.getElementById("name1").value
    const name2 = document.getElementById("name2").value

    if(name1 && name2 ){
        const hash = (name1 + name2).split('').reduce((acc, char)=> acc + char.charCodeAt(0),0) //Suma ambas variables, las concatena y saca la suma de los resultados unicode de todos los caracteres de la concatenación.
        const lovePorcentage = hash % 101 //En esta función divide el resultado de la función hash y lo divice entre 101 para que nos dé un resultado entre 0 y 100
        document.getElementById("result").style.color='green'
        document.getElementById("result").textContent='Tienes un ' + lovePorcentage + '% de compatibilidad'
    } else {
        document.getElementById("result").style.color='red'
        document.getElementById("result").textContent='Por favor, ingresa los nombres'
    }
}