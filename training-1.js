// créer un algo contenant 4 notes définies aléatoirement et contenues dans un tableau et qui calcule leur moyenne

// tableau qui stocke 4 entiers
let myArray = [];
let newNote = [];
let sum = 0;

// function qui retourne un entier aléatoire
function randomNumberparams() {
    let number = Math.floor(Math.random() * 20);
    return number;
}

//On envoie 4 nombres dans ce tableau
for (let i = 0; i < 4; i++) {
    myArray.push(Math.floor(Math.random() * 20));
}
// on affiche le tableau pour vérifier
console.log(myArray);

// on calcule la somme des valeurs de chaque index
for (let i = 0; i < myArray.length; i++) {
    sum = sum + (myArray[i]);
}

// on divise par le nombre de notes
console.log((sum)/myArray.length);