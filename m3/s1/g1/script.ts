const guessNumber:Function = function(player1:number, player2:number):void {
    let number:number = Math.floor(Math.random() * (100 - 1) + 1);
    console.log(number);
    
    if(player1 != number && player2 != number) {
        let difference1 = Math.abs(player1 - number);
        let difference2 = Math.abs(player2 - number);

        if(difference1 < difference2) {
            console.log('Nessuno dei due ha indovinato, ma il giocatore 1 si è avvicinato di più!');
        } else {
            console.log('Nessuno dei due ha indovinato, ma il giocatore 2 si è avvicinato di più!');
        }
    }else if(player1 === number) {
        console.log('Il giocatore 1 ha indovinato il numero!');
    }else {
        console.log('Il giocatore 2 ha indovinato il numero!');
    }
}

guessNumber(64, 32);