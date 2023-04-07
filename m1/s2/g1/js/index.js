//Selezione colore
function colora() {
    var SceltaColore = document.getElementById('colore').value;
    document.getElementById('box').style.backgroundColor = SceltaColore;
}

//Verifica età
function verifica() {

    var anni = document.getElementById('eta').value;

    if(anni >= 18) {
        

    }else {
        document.getElementById('box2').innerHTML = 'Sei minorenne. Tra 5 secondi verrai reindirizzato a una pagina più adatta';
        setTimeout(function() {
            window.location.href = "https://www.peppapig.com/it-it";
        }, 5000);
    }
}
