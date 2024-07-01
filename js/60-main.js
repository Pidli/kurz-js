const poleCisel = [51, 78, 41, 22, 4, -21, 17, 96, 82, -30];

// vrati se zaporne cislo: vezme cislo A a da ho pred cislo B
// vrati se kladne cislo: vezme cislo B a da ho pred cislo A
// vrati se cislo 0: nic se nestane
const serazenePole = poleCisel.sort((cisloA, cisloB) => {
    return cisloA - cisloB;
});
console.log(serazenePole);

const odNejvyssiho = poleCisel.sort((cisloA, cisloB) => {
    return cisloB - cisloA;
});
console.log(odNejvyssiho);


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

const serazenoPodleLektora = poleKurzu.sort((objektA, objektB) => {
    if (objektA.lektor < objektB.lektor) {
        return -1;
    }else if (objektA.lektor > objektB.lektor){
        return 1;
    }else{
        return 0
    }
});

console.log(serazenoPodleLektora);