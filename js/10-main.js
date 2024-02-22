let barvy = []; //toto je prazdne pole
console.log(barvy);
let notebooky = ["asus", "msi" , "acer", "hp"];
console.log(notebooky);

let cisla = [31, -60, 33, 43, 22];

console.log("moje oblibena znacka notebooku je " + notebooky[2]);

console.log(cisla[1] + cisla[4]);

let mujNotebook = notebooky[0];
console.log(mujNotebook);

console.log(notebooky);
//pridat novou hodnotu do pole notebooky
notebooky.push("apple");
console.log(notebooky);

//zmena hodnoty
notebooky[2] = "intel";
console.log(notebooky);

//odtsraneni hodnoty
notebooky.splice(3, 1);
console.log(notebooky);

//vkladani lementu na specifikce misto
notebooky.splice(1, 0, "goldmax");
console.log(notebooky);

//odstranovani hodnoty z konce pole
let odstranenyNotebook = notebooky.pop();
console.log(notebooky);
console.log(odstranenyNotebook);

//odstranovani ze zacatku pole
let prvniOdstranenyNotebook = notebooky.shift();
console.log(notebooky);
console.log(prvniOdstranenyNotebook);

//toto je pole v poli
let poleMixHodnot = ["Tony", "Truong", 55, ["suzuki", "msi", "huawei"], "baskytara", 29];
console.log(poleMixHodnot[3]);
console.log("Tonduv mobil je:" + poleMixHodnot[3][2]);
console.log("Tonduv notebook je:" + poleMixHodnot[3][1]);

poleMixHodnot[3][2] = "samsung";
console.log("Tonduv mobil je:" + poleMixHodnot[3][2]);

let ovoce = ["banan", "citron", "pomeranc", "ananas", "tresne"];
console.log(ovoce.length);

//indexOf()
let nakupniKosik = ["rohlik", "rohlik", "pomeranc", "tunak", "olej", "kobliha", "pomeranc"];
console.log(nakupniKosik.indexOf("zubni pasta")); //-1 zmanena ze hledana hodnota v poli neni
console.log(nakupniKosik.indexOf("tunak")); 
console.log(nakupniKosik.indexOf("pomeranc")); 
console.log(nakupniKosik.indexOf("pomeranc", 3));