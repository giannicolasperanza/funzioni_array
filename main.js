
// ------------- primo esercizio-----------------


// let array_1 = [
//     ['un', 'per', 'incatenarli.'],
//     ['Anello', 'trovarli,'],
//     ['ghermirli', 'e'],
//     ['gondor', 'mark'],
//   ];
  
//   let array_2 = [
//     [['trovarli,']],
//     ['tu,', 'sciocchi'],
//     ['tu,', 'sciocchi', ['padron', 'Sauron']],
//     ['nel', ['fuggite', 'gandalf']],
//     [['domarli,', 'passare'], 'buio']
//   ];
  

//   console.log(` ${array_1[0][0]}  ${array_1[1][0]} ${array_1[0][1]}   ${array_2[4][0][0]}  ${array_1[0][0]}  ${array_1[1][0]} ${array_1[0][1]}   ${array_2[0][0]}   ${array_1[0][0]}  ${array_1[1][0]} ${array_1[0][1]}  ${array_1[2][0]}  ${array_1[2][1]}  ${array_2[3][0]}   ${array_2[4][1]}   ${array_1[0][2]}`);


// // ------------- fine primo esercizio-----------------

// ------------- secondo esercizio-----------------

function tiroDadi(nomeGiocatore, tiri){
    
    let risultato = 0;
    for(let i = 1; i <= tiri; i++){

        risultato = risultato + Math.floor(Math.random() * (6 - 1) + 1) ;
    }

    return  ` Il giocatore ${nomeGiocatore} ha totalizzato un punteggio di : ${risultato} con ${tiri} tiri` ;

}

let primaGiocata = tiroDadi(prompt("Inserisci il tuo nome"), Number(prompt("Inserisci numero di tiri")));
console.log(primaGiocata);

let secondaGiocata = tiroDadi(prompt("Inserisci il tuo nome"), Number(prompt("Inserisci numero di tiri")));
console.log(secondaGiocata);

// -------------fine  secondo esercizio-----------------

