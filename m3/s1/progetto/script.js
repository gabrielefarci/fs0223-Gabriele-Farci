var Smartphone = /** @class */ (function () {
    function Smartphone(_carica, _numeroChiamate, _costoMinuto) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
        this.costoMinuto = _costoMinuto;
    }
    Smartphone.prototype.ricarica = function (euro) {
        this.carica += euro;
    };
    Smartphone.prototype.numero404 = function () {
        return this.carica + ' euro';
    };
    Smartphone.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Smartphone.prototype.chiamata = function (min) {
        var minuti = min;
        this.carica - this.costoMinuto;
        this.numeroChiamate += 1;
        // non sono riuscito a farlo
    };
    Smartphone.prototype.azzeraChiamate = function () {
        return this.numeroChiamate - this.numeroChiamate;
    };
    return Smartphone;
}());
var firstUser = new Smartphone(5, 3, 0.20);
var secondUser = new Smartphone(3, 5, 0.20);
var thirdUser = new Smartphone(7, 2, 0.20);
// primo utente
firstUser.ricarica(10);
firstUser.chiamata(2.15);
console.log('Il credito del primo utente è di: ' + firstUser.numero404());
console.log('Il numero di chiamate effettuate dal primo utente è: ' + firstUser.getNumeroChiamate());
console.log('Il numero di chiamate del primo utente dopo l\'azzeramento è: ' + firstUser.azzeraChiamate());
console.log('--------------------------------');
// secondo utente
secondUser.ricarica(15);
secondUser.chiamata(1.73);
console.log('Il credito del secondo utente è di: ' + secondUser.numero404());
console.log('Il numero di chiamate effettuate dal secondo utente è: ' + secondUser.getNumeroChiamate());
console.log('Il numero di chiamate del secondo utente dopo l\'azzeramento è: ' + secondUser.azzeraChiamate());
console.log('--------------------------------');
// terzo utente
thirdUser.ricarica(20);
thirdUser.chiamata(3.23);
console.log('Il credito del terzo utente è di: ' + thirdUser.numero404());
console.log('Il numero di chiamate effettuate dal terzo utente è: ' + thirdUser.getNumeroChiamate());
console.log('Il numero di chiamate del terzo utente dopo l\'azzeramento è: ' + thirdUser.azzeraChiamate());
