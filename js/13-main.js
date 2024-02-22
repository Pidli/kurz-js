//negace !
console.log(!true);
console.log(!(5 + 4 == 9));

//nerovna
let zvire = "pes";
if (zvire != "pes") {
    console.log("aaaaaaaaaaaaaaaaaaaaaaa");
}

// ===, !==
//tot kontroluje zda souhlasi i datovy typ
if (5 === "5") {
    console.log("bbbbbbbbbbbbbbbbbbbbbbb");
}

let hodnota = "Tony"
console.log(true);  //true
console.log(false); //false
console.log(false || true); //true
console.log(false && true); //false
console.log(hodnota == "Tonda" || (3 + 5) == 8); //true
console.log(hodnota.length == 4 && (false || true) && (false == false)); //true
console.log((6 + 7) != 13 || (!true) || ("tony" == hodnota.toLowerCase() && hodnota.length <= 10)); //true