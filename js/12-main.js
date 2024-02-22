let vekUzivatele = +(prompt("Kolik je vam let?"));
let jeMuzAnoNe = prompt("Jste muz?").toLowerCase();
console.log(vekUzivatele);

//vysledkem podminky v () je boolean => true/false
//z celeho ifu se vzdy vykona jen 1 vetev
if (vekUzivatele >= 18) {
    alert("Uz vam 18 bylo, muzete si vybrat alkohoholicke napoje");
} else if (vekUzivatele >= 15) {
    alert("18 ti neni, ale 15 ti bylo, dej si redbull");
} else if (vekUzivatele >= 10) {
    alert("je ti alespon 10");
} else if (vekUzivatele >= 8) {
    alert("je ti alepson 8");
} else if (vekUzivatele >= 6) {
    alert("je ti alespon 6");
} else {
    alert("Nejste plnolety nemuzu vam nabidnout alkoohol.");
}

//vnoreny if
/*
if (vekUzivatele >= 18) {
    if (jeMuzAnoNe == "ano") { //case sensitive - rozlisuji se velka a mala pismena
        alert("vitejte v klubu gentelmanu");
    }else if (jeMuzAnoNe == "ne") {
        alert("do klubu mohou vstoupit pouze muzi");
    }else {
        alert("zadali jste nevalidni odpoved");
    }
}else{
    alert("Nebylo vam 18, nemuzete vstoupit do clubu gentlemanu.");
}
*/

//&& logicky operator AND
//pokud obe podminky vrati true, pab bude vysledek podminky take true
if (vekUzivatele >= 18 && jeMuzAnoNe == "ano") {
    alert("Muzete vsotupit do klubu, jste muz a 18 uz vam bylo");
}else{
    alert("Nebylo vam 18 nebo nejste muz, nemuzete vstoupit do clubu gentlemanu.");
}


// || (pipeliny, pravy ALT+W) logicky operator OR
//u operatoru OR staci aby byl true alepson 1
let clenstvi = "stribrne";

if (clenstvi == "zlate" || clenstvi == "stribrne") {
    alert("muzete vyuzit nase vyhody protoze mate bud zlatou nebo stribrnou kartu");
} else {
    alert("bohuzel tato akce je urcena jen pro zlate a stribrne cleny") 
}



