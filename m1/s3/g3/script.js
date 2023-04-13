/* ESERCIZIO 1
Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/

const changeTitle = function () {
    let title = document.getElementById('title'); 
    title.textContent = "Corso Epicode";
}

changeTitle();

/* ESERCIZIO 2
Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {
    document.getElementById('title').className = 'myHeading';
}

addClassToTitle();

/* ESERCIZIO 3
Scrivi una funzione per che cambi il testo dei p figli di un div
*/

const changePcontent = function () {
    let p = document.querySelectorAll('div p');

    p.forEach(element => element.style.color = 'green');
}

changePcontent();

/* ESERCIZIO 4
Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function () {
    let changeLink = document.querySelector('a');
    changeLink.href = 'https://www.google.com';
}

changeUrls();
   
/* ESERCIZIO 5
Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/
   
const addToTheSecond = function () {
    let newLi = document.createElement('li');
    newLi.innerText = '4rd';

    let ul = document.getElementById('secondList');
    ul.appendChild(newLi);
}

addToTheSecond();
   
/* ESERCIZIO 6
Scrivi una funzione che aggiunga un secondo paragrafo al primo div
*/
   
const addParagraph = function () {
    let newP = document.createElement('p');
    newP.innerText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry';

    let div = document.querySelector('div');
    div.appendChild(newP);
}

addParagraph();
   
/* ESERCIZIO 7
Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {
    let firstUl = document.querySelector('ul');
    firstUl.style.display = 'none';
}

hideFirstUl();
   
/* ESERCIZIO 8 
Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {
    let ul = document.querySelectorAll('ul');
    ul.forEach(element => element.style.backgroundColor = 'green');
}

paintItGreen();
   
/* ESERCIZIO 9
Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/
   
const makeItClickable = function () {
    
}

makeItClickable();
   
/* ESERCIZIO 10
Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/
/*  
const revealFooterLink = function () {
    alert(href = 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents');
}

revealFooterLink();
   
/* ESERCIZIO 11
Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/
   
const generateTable = function () {

}
   
/* ESERCIZIO 12
Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/
   
const addRow = function () {
   
   
}
   
/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/
   
const hideAllImages = function () {
   
   
}
   
/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/
   
const changeColorWithRandom = function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let colore = `rgb(${r}, ${g}, ${g})`;

    return colore;
}

let h2 = document.getElementById('changeMyColor');

h2.addEventListener('click', function() {
    h2.style.color = changeColorWithRandom();
})
    
/* EXTRA ESERCIZIO 16
Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
*/

/*
const deleteVowels = function () {
    let vowels = document.querySelectorAll('body');
    vowels.forEach(element => element.removeVolwes(/[aeiou]/gi, ''));
    document.write(vowels);
}

deleteVowels();
*/