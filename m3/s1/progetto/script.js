var Smartphone = /** @class */ (function () {
    function Smartphone(_carica, _numeroChiamate, _costoMinuto) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
        this.costoMinuto = _costoMinuto;
    }
    Smartphone.prototype.ricarica = function (euro) {
        return this.carica += euro;
    };
    Smartphone.prototype.numero404 = function () {
        return this.carica + ' euro';
    };
    Smartphone.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Smartphone.prototype.chiamata = function (min) {
        this.carica - this.costoMinuto;
        this.numeroChiamate += 1;
    };
    Smartphone.prototype.azzeraChiamate = function () {
        return this.numeroChiamate - this.numeroChiamate;
    };
    return Smartphone;
}());
var telefono = new Smartphone(5, 3, 0.20);
var ricarica = telefono.ricarica(10);
var mostraCredito = telefono.numero404();
var numeroChiamate = telefono.getNumeroChiamate();
var chiamataVirtuale = telefono.chiamata(2.15);
var azzera = telefono.azzeraChiamate();
console.log('Il credito residuo dopo la ricarica è di: ' + ricarica + ' euro');
console.log('Il credito è di: ' + mostraCredito);
console.log('Il numero di chiamate effettuate è: ' + numeroChiamate);
console.log(chiamataVirtuale);
console.log('Il numero di chiamate dopo l\'azzeramento è: ' + azzera);
