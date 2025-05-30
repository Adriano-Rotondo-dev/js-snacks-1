// TODO: Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente

let userN = Number(prompt("Inserisci il numero di cui vuoi ottenere il cubo"));

for (let i = 0; i < userN; i++) {
  let cube = i * i * i;
  console.log("il cubo di " + i + " è " + cube);
}
