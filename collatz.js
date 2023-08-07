let exemple = 14;

let collatz = (number) => {
    while (number !== 1) {
        if (number % 2 === 0) {
            number = number / 2;
            console.log(number);
        } else {
            number = number * 3 + 1;
            console.log(number);
        }
    }
}

collatz(exemple);