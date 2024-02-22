let auta = ["mini", "bmw", "skoda", "audi", "toyota", "ford", "volvo"];

let hledaneAuto = prompt("U jake znacky to mam breaknout?").toLowerCase();

for (let i = 0; i < auta.length; i++) {
    if (auta[i] == hledaneAuto) {
        break; //jakmile se sputi break, taks e zbytek cyklu uz nevykona a cely cyklus konci
    }

    console.log(auta[i]);
}

console.log("hotovo");


while(true) {
    let odpovedUzivatele = prompt("Jste zenaty?(ANO/NE)").toLowerCase();
    if (odpovedUzivatele != "ano" && odpovedUzivatele != "ne") {
        alert("Zadali jste spatnou odpoved, zkus-te to znovu");
        //uzivatel odpovedel neco jineho nez ano nebo ne
    }else{
        //uzivatel odpoved ano nebo ne
        break;
    }
}

console.log("hotovo");
    