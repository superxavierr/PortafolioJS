function calculateBMI(){
    const weight = parseFloat(document.getElementById("weight").value)
    const height = parseFloat(document.getElementById("height").value)

    if(weight && height ){
        const bmi = weight / (height * height)

        let clasification;
        
        if (bmi < 18.5){
            clasification = "bajo de peso";
            document.getElementById("clasification").style.color='cyan'

        }else if (bmi < 25){
            clasification = "con peso adecuado";
            document.getElementById("clasification").style.color='green'

        }else if (bmi < 30){
            clasification = "con sobrepeso";
            document.getElementById("clasification").style.color='yellow'

        }else if (bmi < 35){
            clasification = "con obesidad grado 1";
            document.getElementById("clasification").style.color='gold'

        }else{
            clasification = "con obesidad grado 2";
            document.getElementById("clasification").style.color='red'

        }

        document.getElementById("result").style.color='white'
        document.getElementById("result").textContent='Tu IMC es de: ' + bmi
        document.getElementById("clasification").textContent='Estás ' + clasification

    } else {
        document.getElementById("result").style.color='red'
        document.getElementById("result").textContent='Por favor, ingresa los valores'

    }

}