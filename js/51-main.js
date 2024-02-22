let hrnek = {
    jmenoProduktu: "hrnek",
    cena: 130,
    pocetNaSklade: 40,
    ceskaVyroba: false,
    material: ["porcelan", "barvy"]
};

let polstar = {
    jmenoProduktu: "polstar",
    cena: 450,
    pocetNaSklade: 23,
    ceskaVyroba: true,
    material: ["peri", "textil"]
}

class Produkt {
    constructor (argJmenoProduku, argCena, argPocetNaSklade, argCeskaVyroba, argMaterial) {
        this.jmenoProduktu = argJmenoProduku;
        this.cena = argCena;
        this.pocetNaSklade = argPocetNaSklade;
        this.ceskaVyroba = argCeskaVyroba;
        this.material = argMaterial;
    }

    zlevniSe(argSleva) {
        this.cena -= argSleva;
    }

    prodejSe() {
        this.pocetNaSklade--; 
    }
}

let product1 = new Produkt("fixa", 40, 130, false, ["inkoust", "barva", "plast"]);
let product2 = new Produkt("svetr", 600, 5, true, ["vlna"]);

console.log(product1);
console.log(product2);

product1.zlevniSe(20);

console.log(product1);
console.log(product2);

product2.prodejSe();
product2.prodejSe();
product2.prodejSe();
product2.prodejSe();

console.log(product1);
console.log(product2);

console.log(product2.pocetNaSklade);


