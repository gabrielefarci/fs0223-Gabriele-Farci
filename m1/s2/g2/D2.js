/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/


/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
Stringa: è il dato principale di qualsiasi linguaggio. E una sequenza di lettere e numeri racchiuse all'interno di apici che possono essere singoli o doppi.
Number: il number è un numero. Il number in JS pu sia essere un numero intero che un numero con virgola.
Boolean: i booleani sono molto semplici. Sono bianchi o neri, nessuna via di mezzo. Solo che al posto si bianco e nero abbiamo true o false.
Array: gli arrey sono insiemi di dati. Possono contenere qualsiasi dato descritto sopra, e possono contenere al loro interno anche altri arrey.
Objects: Gli oggetti sono simili agli arrey, ma a differenza di questi ultimi i dati al loro interno sono formati da coppie nome - valore. Esempio: 'nome' : 'mario'. Gli objects al loro interno possono anche ospitare funzioni.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Gabriele";
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let n1 = 12;
let n2 = 20;
let risultato = n1 + n2;
console.log(risultato);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = 'Farci';
console.log(name);

const randome = 'test const';
//randome = 'prova cambiamento';
//console.log(randome);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = x - 4;
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

let result = name1 == name2;
console.log(result);
document.getElementById('test').innerHTML = 'Il risultato è ' + result;

let result2 = name1.toLowerCase() == name2.toLowerCase()
console.log(result2);