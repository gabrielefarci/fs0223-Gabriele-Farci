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

    ricarica(euro: number): void {
        this.carica += euro;
    }

    numero404(): string {
        return this.carica + ' euro';        
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    chiamata(min: number): void {
        let minuti = min;
        this.carica - this.costoMinuto;
        this.numeroChiamate += 1;
        // non sono riuscito a farlo
    }

    azzeraChiamate(): void | number {
        return this.numeroChiamate - this.numeroChiamate;
    }
}

let firstUser = new Smartphone(5, 3, 0.20);
let secondUser = new Smartphone(3, 5, 0.20);
let thirdUser = new Smartphone(7, 2, 0.20);

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