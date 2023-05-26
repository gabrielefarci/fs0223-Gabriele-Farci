interface smartphone {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;

    ricarica(euro: number): void
    numero404(): string
    getNumeroChiamate(): number
    chiamata(min: number): void
    azzeraChiamate(): void
}

class Smartphone implements smartphone {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;

    constructor(_carica: number, _numeroChiamate: number, _costoMinuto: number) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
        this.costoMinuto = _costoMinuto;
    }

    ricarica(euro: number): void | number {
        return this.carica += euro;
    }

    numero404(): string {
        return this.carica + ' euro';        
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    chiamata(min: number): void {
        this.carica - this.costoMinuto;
        this.numeroChiamate += 1;
    }

    public azzeraChiamate(): void | number {
        return this.numeroChiamate - this.numeroChiamate;
    }
}

let telefono = new Smartphone(5, 3, 0.20);

let ricarica = telefono.ricarica(10);
let mostraCredito = telefono.numero404();
let numeroChiamate = telefono.getNumeroChiamate();
let chiamataVirtuale = telefono.chiamata(2.15);
let azzera = telefono.azzeraChiamate();

console.log('Il credito residuo dopo la ricarica è di: ' + ricarica + ' euro');
console.log('Il credito è di: ' + mostraCredito);
console.log('Il numero di chiamate effettuate è: ' + numeroChiamate);
console.log(chiamataVirtuale);
console.log('Il numero di chiamate dopo l\'azzeramento è: ' + azzera);