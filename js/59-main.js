const poleCisel = [51, 78, 41, 22, 4, -21, 17, 96, 82, -30];

const suma =  poleCisel.reduce((akumulator, cislo) => {
    return akumulator + cislo;
}, 0);
console.log(suma);

const sumaLichychCisel = poleCisel.reduce((akumulator, cislo) => {
    if (cislo%2 == 1) {
        return akumulator + cislo;
    }else{
        return akumulator;
    }
}, 0);



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

const celkovaKapacitaKurzu = poleKurzu.reduce((akumulator, objektKurz) => {
    return akumulator + objektKurz.pocetStudentu;
}, 0);
console.log(celkovaKapacitaKurzu);

const kategorieKurzu = poleKurzu.reduce((akumulator, objektKurz) => {
    akumulator.akreditovany
    akumulator.neakreditovany
}, {});