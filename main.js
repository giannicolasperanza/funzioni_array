
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

// function tiroDadi(nomeGiocatore, tiri){
    
//     let risultato = 0;
//     for(let i = 1; i <= tiri; i++){

//         risultato = risultato + Math.floor(Math.random() * (6 - 1) + 1) ;
//     }

//     return  ` Il giocatore ${nomeGiocatore} ha totalizzato un punteggio di : ${risultato} con ${tiri} tiri` ;

// }

// let primaGiocata = tiroDadi(prompt("Inserisci il tuo nome"), Number(prompt("Inserisci numero di tiri")));
// console.log(primaGiocata);

// let secondaGiocata = tiroDadi(prompt("Inserisci il tuo nome"), Number(prompt("Inserisci numero di tiri")));
// console.log(secondaGiocata);

// // -------------fine  secondo esercizio-----------------

// // ------------------terzo esercizio--------------------

// function stampaNumeri(N){

//     for(let i = 1; i <= N; i++){
        
        
//         if(i % 15 == 0){
//             console.log("fizzBuzz");
//         }else if(i % 3 == 0){
//             console.log("fizz")
//         }else if(i % 5 == 0){
//             console.log("buzz")
//         }else{
//             console.log(i);
//         }     
        
//     }

//     return "completato"
// }


// console.log(stampaNumeri(30));

// // ------------------ fine terzo esercizio--------------------

// // ------------------ quarto esercizio--------------------


// function contaCifre (numero){
        
//         if(numero.length > 4){
//             console.log("Numero troppo grande");
//             } else{
//                 console.log(`Il numero ${numero} è composto da ${numero.length} cifre`);
//             }

//     return ""
    
// }


// console.log(contaCifre(prompt("Inserisci un numero")));

// // // ------------------ fine quarto esercizio--------------------

// // // ------------------ quinto esercizio --------------------



// function palindromo(stringa){

//     let senzaSpazi = stringa.replaceAll(" ","");
//     let inverso = senzaSpazi.split("").reverse().join("");

//     if(senzaSpazi == inverso){
//             return true;
            
//     }else{
//     return false;
    
// } 

// }


// console.log(palindromo("i topi non avevano nipoti"));

// // // ------------------ fine quinto esercizio --------------------

// // // ------------------ sesto esercizio --------------------

let arr1 = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

function ordinaDecrescente(array){

   return array.sort( (a, b) => b - a );
}

console.log(ordinaDecrescente(arr1));

function ordinaCrescente(array){

    return array.sort( (a, b) => a - b );
 }
 
 console.log(ordinaCrescente(arr1));



// // // ------------------ fine sesto esercizio --------------------


