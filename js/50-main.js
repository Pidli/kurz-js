/*
let uzivatel = {
    jmeno: "Tonda",
    datumNarozeni: 1992,
    plnolety: true,
    hobby: ["hudba", "sport"],
    notebook: {
        znacka: "MSI",
        rokVyroby: 2021
    }
};

console.log(uzivatel);

//JSON
let stringVeFormatuJson = JSON.stringify(uzivatel);
console.log(stringVeFormatuJson);

localStorage.setItem("uzivatel-data", stringVeFormatuJson);
*/

let nejakyText = localStorage.getItem("uzivatel-data");
console.log(nejakyText);
console.log(nejakyText.length);

let nadpis = document.querySelectorAll("h1")[0];

let jsObjekt = JSON.parse(nejakyText);
console.log(jsObjekt);
nadpis.innerText = jsObjekt.jmeno;