let nejeakyText = "Tento text musi byt obaleny uvozovkami"; 
let nejeakyDalsiText = 'Tento text je obaleny apostrofy';

let mekac = "McDonald's"; //zde je mozne pozit pouze uvozovky pro oableni textu

//escapovani \
let textKdeJsouUvozovkyIApostrofy = "Tony je \"odbornik\" na McDonal's";
console.log(textKdeJsouUvozovkyIApostrofy);

//uzivatel zada jmeno pak zada prijmeni a vypisme jeho jmeno a prijmeni do konzole jako jeden text
let krestniJmeno = prompt("Vase krestni jmeno: ");
let prijmeni = prompt("Vase prijmeni: ");

console.log(krestniJmeno);
console.log(prijmeni);

console.log(krestniJmeno + " " + prijmeni);

//prazdny string
let prazdnyString = "";

//.length
console.log(nejeakyText.length);
console.log("38");
console.log("38".length);
console.log(prazdnyString.length);
