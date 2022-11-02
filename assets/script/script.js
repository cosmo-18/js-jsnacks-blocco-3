// *Snack1*
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// !!!FATTO!!!

  // let richiesta = [];
  // let i = 0;

  // while (i<50){
  //   let numeroUtente = parseInt(prompt('inserisci un numero fino a 50'))
  //   if (numeroUtente > 50 ){
  //   alert('inserisci un numero fino a 50 !!!')
  //   } else {
  //       richiesta.push(numeroUtente)
  //       i= i + numeroUtente;
  //       console.log('soglia numerica corretta')
  //   }
  // }

//   *Snack2*
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let i= 0;
let numero = 0;

while(i < 5) {
    let numeroUtente =  parseInt(prompt('inserisci un numero qualsiasi'));
    numero = numero + numeroUtente;
    i++;

    console.log(`la somma totale è:${numero}`);
}

