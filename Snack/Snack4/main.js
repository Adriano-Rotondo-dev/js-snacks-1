// TODO: Crea un array vuoto. Chiedi per 6 volte di inserire un numero.
// TODO: Se è dispari inseriscilo nell'array.

let numeri = []
for (let i = 0; i < 6; i++) {
  let numero = Number(prompt("Inserisci un numero"));
  if (numero % 2 === 1) {
    numeri.push(numero)
  }
}
console.log(numeri)
