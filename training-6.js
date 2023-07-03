let resultat = 0;
let nombre = 5;

function multiplication(tableau, nombre) {
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] > 20) {
            resultat = tableau[i] * nombre;
            resultat += resultat;
            console.log(resultat);
        }
    }
    return resultat;
}

let monTableau = [4, 27, 32, 4];
console.log(multiplication(monTableau, nombre));