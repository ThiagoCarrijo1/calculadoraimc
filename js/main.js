function calculaImc() {
    let pesoRecebe = document.querySelector("#peso");
    let alturaRecebe = document.querySelector("#altura");
    
    let peso = Number(pesoRecebe.value);
    let altura = Number(alturaRecebe.value);
    let res = document.querySelector(".res");
    
    let imc1 = peso / (altura * altura);

    let imc = imc1.toFixed(2);

    if (!peso) {
      alert("Não foi possível calcular, insira primeiro seu peso e sua altura para saber seu IMC.");
    } else if (imc <= 16.99) {
        res.textContent = `Seu IMC é de: ${imc}. Você está muito abaixo do peso e isso pode ser um risco a sua saúde!`;
        res.classList.add("peso-risco");
    } else if (imc <= 18.49) {
    	res.textContent = `Seu IMC é de: ${imc}. Você está abaixo do peso e isso pode ser um risco a sua saúde!`;
        res.classList.add("peso-risco");
    } else if (imc <= 24.99){
    	res.textContent = `Seu IMC é de: ${imc}. Você está com o peso normal! Parabéns continue assim.`;
        res.classList.remove("peso-risco");
        res.classList.add("peso-normal");
    } else if (imc <= 29.99) {
    	res.textContent = `Seu IMC é de: ${imc}. Você está acima do peso e isso pode ser um risco a sua saúde!`;
        res.classList.add("peso-risco");
    } else if (imc <= 34.99) {
    	res.textContent = `Seu IMC é de: ${imc}. Você está acima do peso com obesidade tipo 1 e isso pode ser um risco a sua saúde!`;
        res.classList.add("peso-risco");
    } else if (imc <= 39.99) {
        res.textContent = `Seu IMC é de: ${imc}. Você está acima do peso com obesidade tipo 2 (severa) e isso pode ser um risco a sua saúde!`;
        res.classList.add("peso-risco");
    } else {
        res.textContent = `Seu IMC é de: ${imc}. Você está acima do peso com obesidade tipo 3 (mórbida) e isso pode ser um risco a sua saúde!`;
        res.classList.add("peso-risco");
    }
}

let clickBotao = document.querySelector(".botao");

clickBotao.addEventListener("click", calculaImc);