var abbigliamento = /** @class */ (function () {
    function abbigliamento(_capo, _codprod, _collezione, _colore, _disponibile, _id, _modello, _prezzoivaesclusa, _prezzoivainclusa, _quantita, _saldo) {
        this.capo = _capo;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.colore = _colore;
        this.disponibile = _disponibile;
        this.id = _id;
        this.modello = _modello;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.quantita = _quantita;
        this.saldo = _saldo;
    }
    abbigliamento.prototype.mostraPrezzo = function () {
        var savings1 = (this.prezzoivaesclusa * this.saldo) / 100;
        var prezzoSenzaIva = this.prezzoivaesclusa - savings1;
        console.log('Il prezzo senza iva e scontato è di: ' + prezzoSenzaIva + '€');
        var savings2 = (this.prezzoivainclusa * this.saldo) / 100;
        var prezzoConIva = this.prezzoivainclusa - savings2;
        console.log('Il prezzo con iva e scontato è di: ' + prezzoConIva + '€');
    };
    return abbigliamento;
}());
fetch('Abbigliamento.json')
    .then(function (res) {
    if (res.ok) {
        return res.json();
    }
    else {
        throw new Error();
    }
})
    .then(function (data) {
    console.log(data);
    data.forEach(function (capi) {
        console.log(capi);
        var abbigliamenti = new abbigliamento(capi.capo, capi.codprod, capi.collezione, capi.colore, capi.disponibile, capi.id, capi.modello, capi.prezzoivaesclusa, capi.prezzoivainclusa, capi.quantita, capi.saldo);
        console.log(abbigliamenti);
        abbigliamenti.mostraPrezzo();
    });
})
    .catch(function (err) {
    console.log(err);
});
