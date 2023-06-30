// Créer une fonction qui prend en paramètre un tableau d'entier
// Elle retournera le nombre de valeurs inférieures à 10 et le nb de valeurs suppérieures à 10

let myArray       = [1, 11, 20, 3, 15];
let nombreInfADix = 0;
let nombreSupADix = 0;


function nombreDeValeur(tableau) {

    for (let i = 0; i < tableau.length; i++) {

        if (tableau[i] < 10) {
            nombreInfADix++;
        } else {
            nombreSupADix++;
        }

    }
    
    return { // syntaxe pour retourner 2 valeurs
        nombreInfADix: nombreInfADix,
        nombreSupADix: nombreSupADix
    };
    
}

nombreDeValeur(myArray); // on applique la fonction au tableau

console.log("Il y a " + nombreInfADix + " nombres inférieurs à 10 et "
    + nombreSupADix + " nombres supérieurs à 10");