let poleCisel = [65, 41, 40, 87, 11, -56, 33, 72, 96, 60, -14, -3, -20];

while (true) {
    
    //flag
    let serazeno = true;

    for (let i = 0; i < poleCisel.length - 1; i++) {
        if (poleCisel[i] < poleCisel[i+1]) {
            let docasnaPamet = poleCisel[i];

            poleCisel[i] = poleCisel[i+1];
            poleCisel[i+1] = docasnaPamet;

            serazeno = false;
        }
    }

    if (serazeno == true) {
        break;
    }

}

console.log(poleCisel);