/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
let stringExample = 'ciao' // Le stringhe sono come le parole che compongono le frasi che diciamo.
// Possono trasmettere messaggi, come un saluto o una presentazione, come "Ciao" o "Mi chiamo Luca". Sono sequenze di caratteri, proprio come le frasi che diciamo ogni giorno.

let numberExample = 145 // Normalissimi numeri

let booleanExample = true // Gli operatori booleani fungono in modo simile ad un interruttore: si spengono o si accendono.
//Immagina di chiedere a un compagno "Hai svolto i compiti assegnati?". Lui potrà risponderti solo "Sì" o "No", senza via di mezzo.

let unknown // Lo stato indefinito ricorda una scatola che ancora non hai esaminato. Non sai cosa contenga, poiché non l'hai scoperchiata, e di conseguenza non è ancora stabilito
// ciò che vi potresti trovare. Si distingue dal "null" perché implica che non abbiamo ancora intrapreso alcuna azione con quella scatola.

let completelyEmpty = null // Il valore null è paragonabile a una scatola vuota. Rappresenta la "mancanza" di qualunque cosa.
// Se aprissi una scatola solo per scoprire che al suo interno non c'è assolutamente nulla, otterresti un risultato "null".

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = `Luca`

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`Il mio nome è`, myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let FirstNumber = 1
let SecondNumber = 2
console.log(`La somma di 1 + 2 è`, FirstNumber + SecondNumber)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12
console.log(`La Variante 'X' equivale a`, x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = `Capasso` // riassegno il mio cognome al posto del mio nome, quindi ora il valore diventa Capasso
console.log(`Il mio cognome è`, myName) // L'output diventa L'ultima riassegnazione di myName

const myLastName = 'Luca' // la variabile è stata inizialmente assegnata come "Mario"
//myLastName = 'Capasso' // provo a riassegnare il valore a "Rossi"
console.log(myLastName) // questo codice non sarà mai eseguito perché ci sarà un errore prima

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let y = 4
console.log(
  `x equivale a 12, y equivale a 4, la sottrazione dei due da come risultato=`,
  x - y
)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = 'john' // name1 contiene "john"
let name2 = 'John' // name2 contiene "John" con la J maiuscola

// Verifica se name1 è diverso da name2
let isDifferent = name1 !== name2
console.log(isDifferent) // L'output risulta essere: true (sono diversi)

// Verifica se sono uguali quando entrambi i nomi sono convertiti in minuscolo
let isEqualLowercase = name1.toLowerCase() === name2.toLowerCase()
console.log(isEqualLowercase) // Diventano uguali in lowercase
