const poleCisel = [51, 78, 41, 22, 4, -21, 17, 96, 82, -30];

const druhaMocnina = poleCisel.map((cislo) => {
    return cislo * cislo;
});

console.log(poleCisel);
console.log(druhaMocnina);

//pokud je cislo sude tak pricteme 10
//pokud je cislo liche tka pricteme 5
const novePole = poleCisel.map((cislo) => {
    if (cislo%2 == 0) {
        return cislo + 10;
    }else{
        return cislo + 5;
    }
});
console.log(novePole);


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

//navysime kapacitu kurzu, ktere jsou akreditovane o 10 mist
//objekty a pole jsou ukladany referenci!!!
//pokud ve funkci map menite vlastnosti objektu tak se zmeni i hodnota originalniho objektu
const novePoleKurzu = poleKurzu.map((kurzObjekt) =>  {
    if (kurzObjekt.jeAkreditovany) {
        kurzObjekt.pocetStudentu += 10;
        return kurzObjekt;
    }else{
        return kurzObjekt;
    }
});

//toto pole jsou uplne stejne ikdyz se jedna o kopii a original
console.log(poleKurzu);
console.log(novePoleKurzu);