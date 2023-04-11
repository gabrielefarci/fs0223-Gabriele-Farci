/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
    let a = l1 * l2;
    
    return a;
}

let l1 = 3;
let l2 = 5;
let a = area(l1, l2);

console.log('L\'area del rettangolo è: ' + a);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1, n2) {
    return n1 + n2;
}

let n1 = 3;
let n2 = 2;
let somma = n1 + n2;

console.log('La somma è: ' + somma);

let somma2 = n1 + n2;
let somma2Moltiplicata = somma2 * 3;

if(n1 == n2) {
    console.log('La somma moltiplicata per tre è: ' + somma2Moltiplicata);
}

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero1) {
    return numero1 - numero2;
}

let numero1 = 10;
let numero2 = 19;
let differenza = numero1 - numero2;

console.log('La differenza assoluta tra i due numeri e: ' + differenza);

let differenza2 = differenza * 3;

if(numero1 > 19) {
    console.log('La differenza assoluta moltiplicata per tre è: ' + differenza2);
}

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    return n;
}

let n = 30;
let boolean = true;

if(n > 20 && n <= 100) {
    console.log(boolean);
} else if(n == 400){
    console.log(boolean);
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa) {
    return stringa;
}

let stringa = 'EPICODE full stack developer';
let nuovaStringa = 'EPICODE '.concat(stringa);

if(stringa.search('EPICODE')) {
    console.log(stringa);
} else {
    console.log(nuovaStringa);
}

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(num) {
    return num;
}

let num = 7;

if(num % 3 == 0) {
    console.log('Il numero è multiplo di 3');
} else if(num % 7 == 0) {
    console.log('Il numero è multiplo di 7');
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {

    let newString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    return newString;

}

let str = 'EPICODE';
let result = reverseString(str);

console.log(result);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst (string) {
    
}

let string = 'hello world!';
let arr = string.split(" ");

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

let string2 = arr.join(" ");
console.log(string2);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(string3) {
    return string3;
}

let string3 = 'epicode';
let nuovoTesto = string3.substring(1);
string3.slice(0, -1);

console.log(nuovoTesto);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

