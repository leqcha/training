let tableau1 = [2, 4, 6, 8];
let tableau2 = [1, 2, 4, 6, 8];
let tableau3 = [1, 3, 5, 7, 9, 11];


function verifTableauPair(tableau) {

    for (let i = 0; i < tableau.length; i++) {
     
        if ((tableau[i] % 2) != 0) {
            return false;
        }
    }
    return true;
}

console.log(verifTableauPair(tableau1));
console.log(verifTableauPair(tableau2));
console.log(verifTableauPair(tableau3));
