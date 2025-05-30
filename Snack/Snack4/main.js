// TODO: Crea un array vuoto. Chiedi per 6 volte di inserire un numero. Se è dispari inseriscilo nell'array.

let numeri = []
for (let i = 0; i < 6; i++) {
  let numero = Number(prompt("Inserisci un numero"));
  numeri.push(numero)
}
console.log(numeri)
