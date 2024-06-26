const poleCisel = [51, 78, 41, 22, 4, -21, 17, 96, 82, -30];
//originalni pole zustane nedotcene
//funkce filter nam vrati nove pole
//pokud arrow funkce vrati true, tak cislo vlozime do finalniho pole
//pokud arrow funkce vrati false, tak se toto cislo do finalniho pole nedostane
const vyfiltrovanoSudaCisla = poleCisel.filter((cislo) => {
    if (cislo%2 == 0) {
        return true;
    }else{
        return false;
    }
});

console.log(poleCisel);
console.log(vyfiltrovanoSudaCisla);


const poleKurzu = [
    {
        id: 111,
        nazev: "Programator",
        lektor: "Tony",
        pocetStudentu: 15,
        jeAkreditovany: true
    },
    {
        id: 123,
        nazev: "JavaScript",
        lektor: "Tony",
        pocetStudentu: 10,
        jeAkreditovany: false
    },
    {
        id: 321,
        nazev: "Webmaster",
        lektor: "Kuba",
        pocetStudentu: 21,
        jeAkreditovany: true
    },
    {
        id: 456,
        nazev: "Manazer",
        lektor: "David",
        pocetStudentu: 30,
        jeAkreditovany: true
    },
    {
        id: 654,
        nazev: "Grafik",
        lektor: "Lukas",
        pocetStudentu: 27,
        jeAkreditovany: true
    },
    {
        id: 222,
        nazev: "Wordpress",
        lektor: "Kuba",
        pocetStudentu: 5,
        jeAkreditovany: false
    },
];

const meneNez20 = poleKurzu.filter((kurzObjekt) => {
    if (kurzObjekt.pocetStudentu < 20) {
        return true;
    }else{
        return false;
    }
});

console.log(poleKurzu);
console.log(meneNez20);