// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

// funzione per generare numeri random
function numeroRandom(numMin, numMax) {
var numRandom = Math.floor(Math.random() * (numMax - numMin +1) ) + numMin;
return numRandom;
}

// generare 16 numeri casuali tra 1 e 100 (senza duplicati). Con button
// document.getElementById("myButton").addEventListener("click", function() {
//   var numero = numeroRandom(1, 100);
//   console.log('numero', numero);
// });

// creo un ciclo for per la creazione di 16 numeri:
// document.getElementById("myButton").addEventListener("click", function() {
//   for (var i = 0; i < 16; i++) {
//     var numero = numeroRandom(1, 100);
//     console.log('numero', numero);
// }
// });
document.getElementById("myButton").addEventListener("click", function() {
// creo un array che conterrà i 16 numeri
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
for (var i = 0; i < 5; i++) {
      var numeroUser = parseInt(prompt('inserisci un numero'));
      if (!numbersArray.includes(numeroUser)) {
       numbersArray.push(numeroUser);
     } else {
       alert('hai perso');
       alert('punteggio: ' + i);
       break;
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
