//samotna definice funkce nic nespousti
function vyalertujAhoj(argKrestniJmeno) {
    alert("Ahoj " + argKrestniJmeno);
}


let odpovedUzivatele = prompt("Jak vas mame pozdravit?");

//volani funkce (call a function)
vyalertujAhoj(odpovedUzivatele);



function vyberVypisVyssiCislo (argPrvniCislo, argDruheCislo) {
    if (argPrvniCislo >= argDruheCislo) {
        console.log(argPrvniCislo);
    } else {
        console.log(argDruheCislo);
    }
}

vyberVypisVyssiCislo(42, 70);
vyberVypisVyssiCislo(97, 40);

//return, vraci
function soucetDvouCisel(argPrvniCislo, argDruheCislo) {
    let vysledek = argPrvniCislo + argDruheCislo;


    return vysledek;

    console.log("aaaaaaaaaaaaaaaaaaaaaaa");

}


let vysledekVolaniFunkce = soucetDvouCisel(43, 70);

console.log(vysledekVolaniFunkce);
alert(vysledekVolaniFunkce);

let dalsiVysledekFunkce = soucetDvouCisel(65, vysledekVolaniFunkce);