let inputNumero = document.getElementById("inputNumber");

function pegarNumero(e) {
  e.preventDefault();

  let numero = parseInt(inputNumero.value);
  let soma = 0;
  let anterior = 0;
  let proximo = 1;
  let array = [0, 1];

  for (let i = 2; i < numero; i++) {
    soma = anterior + proximo;
    anterior = proximo;
    proximo = soma;
    array.push(soma);
  }

  if (array.includes(numero)) {
    alert("O número informado pertence a sequência de Fibonacci");
  } else {
    alert("O número informado não pertence a sequência de Fibonacci");
  }

  console.log(array);
}
