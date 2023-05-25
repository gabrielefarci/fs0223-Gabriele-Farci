class abbigliamento {
    capo:string;
    codprod:number;
    collezione:string;
    colore:string;
    disponibile:string;
    id:number;
    modello:number;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    quantita:number;
    saldo:number;

    constructor(_capo:string, _codprod:number, _collezione:string, _colore:string, _disponibile:string, _id:number, _modello:number, _prezzoivaesclusa:number, _prezzoivainclusa:number, _quantita:number, _saldo:number) {
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

    public mostraPrezzo() {
        
        let savings1 = (this.prezzoivaesclusa * this.saldo) / 100;
        let prezzoSenzaIva = this.prezzoivaesclusa - savings1;
        console.log('Il prezzo senza iva e scontato è di: ' + prezzoSenzaIva + '€');
        
        let savings2 = (this.prezzoivainclusa * this.saldo) / 100;
        let prezzoConIva = this.prezzoivainclusa - savings2;
        console.log('Il prezzo con iva e scontato è di: ' + prezzoConIva + '€');
    }
}

fetch('Abbigliamento.json')
.then((res:Response) => {
    if(res.ok) {
        return res.json();        
    }else {
        throw new Error();
    }
})
.then((data:abbigliamento[]) => {
    console.log(data);

    data.forEach(capi => {
        console.log(capi);

        let abbigliamenti = new abbigliamento(capi.capo, capi.codprod, capi.collezione, capi.colore, capi.disponibile, capi.id, capi.modello, capi.prezzoivaesclusa, capi.prezzoivainclusa, capi.quantita, capi.saldo);
        console.log(abbigliamenti);

        abbigliamenti.mostraPrezzo();
    });
})
.catch(err => {
    console.log(err);
})