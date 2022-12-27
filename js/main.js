function calculaImc() {
    var pesoRecebe = document.querySelector("#peso");
    var alturaRecebe = document.querySelector("#altura");
    
    var peso = Number(pesoRecebe.value);
    var altura = Number(alturaRecebe.value);
    var res = document.querySelector(".res");
    
    var imc1 = peso / (altura * altura);

    var imc = imc1.toFixed(2);

        if(imc <= 16.99) {
            res.textContent = `Seu IMC é de: ${imc} você está muito abaixo do peso!`;
    	} else if (imc <= 18.49) {
    		res.textContent = `Seu IMC é de: ${imc} você está abaixo do peso!`;
        } else if (imc <= 24.99){
    		res.textContent = `Seu IMC é de: ${imc} você está com o peso normal!`;
    	} else if (imc <= 29.99) {
    		res.textContent = `Seu IMC é de: ${imc} você está acima do peso!`;
        } else if (imc <= 34.99) {
    		res.textContent = `Seu IMC é de: ${imc} você está com obesidade tipo 1!`;
    	} else if (imc <= 39.99) {
            res.textContent = `Seu IMC é de: ${imc} você está com obesidade tipo 2 (severa)!`;
        } else {
            res.textContent = `Seu IMC é de: ${imc} você está com obesidade tipo 3 (mórbida)!`;
        }
}