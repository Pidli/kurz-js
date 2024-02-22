console.log("51" + 23); //"5123"
console.log(51 + "23"); //"5123"
console.log(51 + 23); //74

let vekUzivatele = prompt("Kolik je vam let?");

console.log(+(vekUzivatele) + 5);

console.log("5" + 3 + 7); //"53" + 7 => "537"
console.log("5" + (3 + 7)); //"5" + 10 => "510"
console.log(5 + 3 + "7"); //8 + "7" => "87"
console.log(5 + 3 + +("7")); //8 + 7 => 15

let pocetRohliku = +(prompt("Kolik chcete rohliku?"));
console.log(pocetRohliku);