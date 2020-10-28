
// funzione per generare numeri random
function numeroRandom(numMin, numMax) {
var numRandom = Math.floor(Math.random() * (numMax - numMin +1) ) + numMin;
return numRandom;
}

document.getElementById("buttFacile").addEventListener("click", function() {
// creo un array che conterrà i 16 numeri generati dal computer
var numbersArray = [];

// CON UN CICLO WHILE GENERO I NUMERI CASUALI NON RIPETUTI
var i = 0;
while (i < 16) {
  var numRandom = numeroRandom(1, 100);
  if (!numbersArray.includes(numRandom));
      numbersArray.push(numRandom);
  i++;
}
console.log('numeri', numbersArray);

// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.

// CHIEDO ALL'UTENTE DI INSERIRE I numeri per N VOLTE, CREANDO UN CICLO
for (var i = 0; i < (100 - 16); i++) {
      var numeroUser = parseInt(prompt('inserisci un numero'));
      if (isNaN(numeroUser) || numeroUser < 1 || numeroUser > 100) {
        alert('inserisci un numero compreso tra 1 e 100!');
      } else { if ((!numbersArray.includes(numeroUser)) ){
                numbersArray.push(numeroUser);
              } else {
                  alert('hai perso');
                  alert('punteggio: ' + i);
                  break;
           }
      }
}

console.log('array', numbersArray);
// var i = 0;
// while (i < 5) {
//     var numeroUser = parseInt(prompt('inserisci un numero'));
//     if (!numbersArray.includes(numeroUser))
//           numbersArray.push(numeroUser);
//     i++;
// }
// console.log('userNumbers', userNumbers);
});
document.getElementById("buttMedio").addEventListener("click", function() {
// creo un array che conterrà i 16 numeri generati dal computer
var numbersArray = [];

// CON UN CICLO WHILE GENERO I NUMERI CASUALI NON RIPETUTI
var i = 0;
while (i < 16) {
  var numRandom = numeroRandom(1, 80);
  if (!numbersArray.includes(numRandom));
      numbersArray.push(numRandom);
  i++;
}
console.log('numeri', numbersArray);

// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.

// CHIEDO ALL'UTENTE DI INSERIRE I numeri per N VOLTE, CREANDO UN CICLO
for (var i = 0; i < (80 - 16); i++) {
      var numeroUser = parseInt(prompt('inserisci un numero'));
      if (isNaN(numeroUser) || numeroUser < 1 || numeroUser > 80) {
        alert('inserisci un numero compreso tra 1 e 80!');
      } else { if ((!numbersArray.includes(numeroUser)) ){
                numbersArray.push(numeroUser);
              } else {
                  alert('hai perso');
                  alert('punteggio: ' + i);
                  break;
           }
      }
}

console.log('array', numbersArray);
// var i = 0;
// while (i < 5) {
//     var numeroUser = parseInt(prompt('inserisci un numero'));
//     if (!numbersArray.includes(numeroUser))
//           numbersArray.push(numeroUser);
//     i++;
// }
// console.log('userNumbers', userNumbers);
});
document.getElementById("buttDifficile").addEventListener("click", function() {
// creo un array che conterrà i 16 numeri generati dal computer
var numbersArray = [];

// CON UN CICLO WHILE GENERO I NUMERI CASUALI NON RIPETUTI
var i = 0;
while (i < 16) {
  var numRandom = numeroRandom(1, 50);
  if (!numbersArray.includes(numRandom));
      numbersArray.push(numRandom);
  i++;
}
console.log('numeri', numbersArray);

// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.

// CHIEDO ALL'UTENTE DI INSERIRE I numeri per N VOLTE, CREANDO UN CICLO
for (var i = 0; i < (50 - 16); i++) {
      var numeroUser = parseInt(prompt('inserisci un numero'));
      if (isNaN(numeroUser) || numeroUser < 1 || numeroUser > 50) {
        alert('inserisci un numero compreso tra 1 e 50!');
      } else { if ((!numbersArray.includes(numeroUser)) ){
                numbersArray.push(numeroUser);
              } else {
                  alert('hai perso');
                  alert('punteggio: ' + i);
                  break;
           }
      }
}

console.log('array', numbersArray);
// var i = 0;
// while (i < 5) {
//     var numeroUser = parseInt(prompt('inserisci un numero'));
//     if (!numbersArray.includes(numeroUser))
//           numbersArray.push(numeroUser);
//     i++;
// }
// console.log('userNumbers', userNumbers);
});
