var tasse = /** @class */ (function () {
    function tasse(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    tasse.prototype.getRedditoAnnuoNetto = function () {
        var redditoAnnuoNetto = this.redditoannuolordo - this.tasseinps - this.tasseirpef;
        console.log('Il reddito annuo netto è: ' + redditoAnnuoNetto);
    };
    return tasse;
}());
var lavoratore = new tasse(78, 50.000, 26.23, 43);
lavoratore.getRedditoAnnuoNetto();
