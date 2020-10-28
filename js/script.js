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

// creo un array che conterrà i 16 numeri
var numbers = [];

// CON UN CICLO WHILE GENERO I NUMERI CASUALI NON RIPETUTI
var i = 0;
while (i < 16) {
  var numRandom = numeroRandom(1, 100);
  if (!numbers.includes(numRandom));
  numbers.push(numRandom);
  i++
}
console.log('numeri', numbers);