// créer une fonction qui prend 2 tableaux d'entiers en paramètres
// Elle verifiera celui qui dispose de la plus grande moyenne
// elle retournera VRAI si le premier tableau contient la plus grande moyenne
// et FAUX si c'est le deuxième

let array1 = [1,2,3];
let array2 = [4,5,6];
let moyenne = 0;
let somme = 0;
let resultat = array1 > array2;

function calculMoyenne(tableau) {
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i]
    }
    moyenne = (somme) / (tableau.length)
    return moyenne;
}

console.log(resultat);
