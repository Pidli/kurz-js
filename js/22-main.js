//scope promenne
let vek = 29;


if (5 == 3+2) {
    console.log("aaaaaaaaaaaaaaaa");
    console.log(vek);

    let teplota = 35;
    console.log(teplota);

    if (true) {
        console.log(teplota);

        let den = "pondeli";
        console.log(den); //toot je v poradku jsme uvnitr scopu promenne den
    }

    console.log(den); //toot je chyba den vzniknul uvnitr ifu na radce 12 a tady venku neexistuje

}


//console.log(teplota); //toot vyhodi chybu protoze promenna teplota tady venku neexistuje


while (true) {
    let barva = "cervena";

    break;
}


for (let i = 0; i < 7; i++) {
    //zde promenna i existuje
    console.log(i);
}

//zde uz promenna i neexistuje
//console.log(i); //spatne


function prevratitHodnotu(argcislo) {
    let vysledek = 0 - argcislo; //promenne ktere vzniknout uvnitr funkce nelze pouzit mimo ne


    //pokud cheme nejakou honodtu dostat ven z funkce pro dalsi pouziti tak ji musime returnout
    return vysledek;
}


console.log(prevratitHodnotu(6));

//zde promenna vysledek uz neexistuje
//console.log(vysledek); //spatne










