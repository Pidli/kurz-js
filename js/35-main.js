//getElementsById
let elmKocka = document.getElementById("kocka");
console.log(elmKocka);

elmKocka.style.backgroundColor = "#AF350C";

//getElmentsByTagName
let elmsH2 = document.getElementsByTagName("h2");
console.log(elmsH2);
//elmsH2.style.fontFamily = "courier"; //toto je spatne protoze 
elmsH2[0].style.fontFamily = "courier";
elmsH2[1].style.fontFamily = "courier";

//pokud mame kolekci elementu a chceme zmenit vlastnot u vsech tak musime pouzit cyklus
for (let i = 0; i < elmsH2.length; i++) {
    elmsH2[i].style.color = "red";
}

//getElementsByClassName
let elmsZebra = document.getElementsByClassName("zebra");
console.log(elmsZebra);

for (let i = 0; i < elmsZebra.length; i++) {
    elmsZebra[i].style.fontSize = "20px";
}

//querySelectorAll
//tato funkce vzdy vraci pole elementu
let elmsZaba = document.querySelectorAll(".zaba");
for(let i = 0; i < elmsZaba.length; i++) {
    elmsZaba[i].style.color = "darkgreen";
}

let elmsZabaZebra = document.querySelectorAll(".zaba.zebra");
console.log(elmsZabaZebra);

for (let i = 0; i < elmsZabaZebra.length; i++) {
    elmsZabaZebra[i].style.backgroundColor = "bisque";
}

//dodatecne informace
let prvniZebra = document.querySelector(".zebra");
console.log(prvniZebra);
prvniZebra.style.fontSize = "30px";