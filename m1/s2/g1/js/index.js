//Selezione colore
function colora() {
    var SceltaColore = document.getElementById('colore').value;
    document.getElementById('box').style.backgroundColor = SceltaColore;
}

//Verifica età
function verifica() {

    var anni = document.getElementById('eta').value;

    if(anni >= 18) {
        document.getElementById('box2').innerHTML = 'Sei maggiorenne';
    }else {
        document.getElementById('box2').innerHTML = 'Sei minorenne';
    }

}
   
