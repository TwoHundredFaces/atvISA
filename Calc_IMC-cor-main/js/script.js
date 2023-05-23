//Home

function abrirMudarCor() {
  window.location.href = 'alterarCor.html';
}

function abrirCalculadoraIMC() {
  window.location.href = 'calculadora_imc.html';
}

// Alterar cor

function alterarCor(cor) {
  if (cor) {
      document.body.style.backgroundColor = cor;
  } else {
      const nomeCorInput = document.getElementById('nomeCorInput');
      const codigoCorInput = document.getElementById('codigoCorInput');
      const nomeCor = nomeCorInput.value;
      const codigoCor = codigoCorInput.value;

      if (codigoCor) {
          document.body.style.backgroundColor = codigoCor;
      } else if (nomeCor) {
          document.body.style.backgroundColor = nomeCor;
      }
  }
}


// Calculadora IMC

let calculateButtonIMC = document.getElementById("button-calculate");


calculateButtonIMC.addEventListener("click", function () {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;

  if (peso == "" && altura == "") {
    document.getElementById("result").innerHTML =
      "Por favor, preencha todos os campos.";
    return;
  }

  let alturaMetros = altura / 100;
  let imc = peso / (alturaMetros * alturaMetros);
  let mensagem;

  if (imc < 18.5) {
    mensagem = "Abaixo do peso";
  } else if (imc < 25) {
    mensagem = "Peso normal";
  } else if (imc < 30) {
    mensagem = "Sobrepeso";
  } else if (imc < 35) {
    mensagem = "Obesidade grau I";
  } else if (imc < 40) {
    mensagem = "Obesidade grau II"
  } else {
    mensagem = "Obesidade grau III (Obesidade mórbida)"
  }

  document.getElementById("result").innerHTML =
    "Seu IMC é " + imc.toFixed(2) + "<br>" + mensagem;
});