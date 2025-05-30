// TODO: il software deve chiedere per 10 volte all'ultente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

let somma = 0;
for (let i = 0; i < 10; i++) {
  let numero = Number(prompt("Inserisci un numero intero"));
  somma += numero;
}
console.log(somma);
alert("La somma dei numeri ottenuti è " + somma);
