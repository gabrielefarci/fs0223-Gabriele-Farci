class tasse {
    codredd:number;
    redditoannuolordo:number;
    tasseinps:number;
    tasseirpef:number;

    constructor(_codredd:number, _redditoannuolordo:number, _tasseinps:number, _tasseirpef:number) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }

    getRedditoAnnuoNetto():void {
        let redditoAnnuoNetto = this.redditoannuolordo - this.tasseinps - this.tasseirpef;
        console.log('Il reddito annuo netto è: ' + redditoAnnuoNetto);
    }
}

let lavoratore = new tasse(78, 50.000, 26.23, 43);

lavoratore.getRedditoAnnuoNetto();