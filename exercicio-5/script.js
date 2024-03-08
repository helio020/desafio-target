let string = prompt("Insira um texto aqui");

function reverseString(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}
let stringInvertida = reverseString(string);

alert(stringInvertida);
