function zjistiPrumer(argZadanePoleCisel) {
    if (argZadanePoleCisel.length == 0) {
        return 0;
    }else{
        let vysledek;
        let suma = 0;
        for (let i = 0; i < argZadanePoleCisel.length; i++) {
            suma += argZadanePoleCisel[i];
        }

        vysledek = suma/argZadanePoleCisel.length;

        return vysledek;
    }

}

let poleCisel = [9, 6, 4, 4, 6, 1];

console.log(zjistiPrumer([5, 7, 3]));
console.log(zjistiPrumer([1, 9, 0, 7, 14]));
console.log(zjistiPrumer([8]));
console.log(zjistiPrumer([]));
console.log(zjistiPrumer(poleCisel));


//co je to NaN (Not a Number)