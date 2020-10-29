// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

var RANDOM_NUMB = 16;  //NUMERI RANDOM GENERATI DAL COMPUTER
var MAX_LIMIT = 100;   //NUMERI DA 1 A 100
var MIN_LIMIT = 1;     //
var ROUND = 84;       //QUANTITÀ MAX DI NUMERI  CHE L'UTENTE PUÒ INSERIRE
// creo un array che conterrà i 16 numeri generati dal computer
var numbersArray = [];


document.getElementById("buttFacile").addEventListener("click", function() {

  // inserisco una richiesta di scegliero il livello di difficoltà
  var sceltaLivello = parseInt(prompt('Scegli il livello di difficoltà: 0, 1, 2'));
  switch (sceltaLivello){
    case 0:
     MAX_LIMIT = 100
     ROUND = (100 - 16);
     break;
    case 1:
     MAX_LIMIT = 80;
     ROUND = (80 - 16);
      break;
    case 2:
     MAX_LIMIT = 50;
     ROUND = (50 - 16);
      break;
  }


// CON UN CICLO WHILE GENERO I NUMERI CASUALI NON RIPETUTI
var i = 0;
while (i < RANDOM_NUMB) {
  var numRandom = numeroRandom(MIN_LIMIT, MAX_LIMIT);
  if (!numbersArray.includes(numRandom));
      numbersArray.push(numRandom);
  i++;
}
console.log('numeri', numbersArray);

// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.

// CHIEDO ALL'UTENTE DI INSERIRE I numeri per N VOLTE, CREANDO UN CICLO
for (var i = 0; i < (MAX_LIMIT - RANDOM_NUMB); i++) {
      var numeroUser = parseInt(prompt('inserisci un numero tra ' + MIN_LIMIT + ' e ' + MAX_LIMIT));
      if (isNaN(numeroUser) || numeroUser < MIN_LIMIT || numeroUser > MAX_LIMIT) {
        alert('inserisci un numero compreso tra' + MIN_LIMIT  + ' e ' + MAX_LIMIT);
      } else { if ((!numbersArray.includes(numeroUser)) ){
                numbersArray.push(numeroUser);
              } else {
                  document.getElementById('info').innerHTML = 'Hai perso!';
                  document.getElementById('punteggio').innerHTML = ('punteggio: ' + i);
                  break;
           }
      }
}

console.log('array', numbersArray);
});
