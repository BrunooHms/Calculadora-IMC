function calcular() {
    nome = document.getElementById('nome').value;
    altura = document.getElementById('altura').value;
    peso = document.getElementById('peso').value;
    saidaRes = document.getElementById('resultado');
   

    imc = peso / (altura * altura);
    imc = imc.toFixed(2);

   if(imc < 18.5){
    saidaRes.innerHTML = ` ${nome} o seu IMC é de ${imc}. <br> Voçê está abaixo do peso`
   }
   if(imc >= 18.5 && imc <= 24.9){
    saidaRes.innerHTML = `${nome} o seu IMC é de ${imc}. <br> Voçê está no peso normal`
   }
   if(imc >= 25 && imc <= 29.9) {
    saidaRes.innerHTML = `${nome} o seu IMC é de ${imc}. <br> Voçe está acima do peso`
   }
   if(imc >= 30 && imc <= 39.9) {
    saidaRes.innerHTML = `${nome} o seu IMC é de ${imc}. <br> Voçe está muito acima do peso`
   }
   if(imc >= 40) {
    saidaRes.innerHTML = `${nome} o seu IMC é de ${imc}. <br> Voçe está perigosamente acima do peso`
   }
   
}
