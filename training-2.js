// créer une fonction qui additionne tous les éléments d'un tableau passé en paramètre,
// seulement si les valeures sont inférieures à 10.
// Ensuite la fonction retourne le résultat de ce calcul

let myArray = [];
let result = 0;

// on génère 10 nombre aléatoires
for (let i = 0; i < 10; i++) {
    myArray.push(Math.floor(Math.random() * 20));
}
// on affiche le tableau pour vérifier
console.log(myArray);

// On crée une fonction qui trie les valeurs et ajoute au résultat si < 10
function trieEtAjoute(tableau) {

    for (let i = 0; i < myArray.length; i++) {
        
        if (myArray[i] < 10) {
            result += tableau[i];
        }
    }
    return result;
}
console.log(trieEtAjoute(myArray));