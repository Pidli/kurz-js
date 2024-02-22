let poleCisel = [65, 41, 40, 87, 11, -56, 33, 72, 96, 60, -14, -3, -20];

let suma = 0;

for (let i = 0; i < poleCisel.length; i++) {
    
    //suma += poleCisel[i];
    suma = suma + poleCisel[i];
}

console.log(suma);

//zjistit maximum
//do promenne max ulozime prvni cislo v poli
let max = poleCisel[0];

for (let i = 0; i < poleCisel.length; i++) {
    if (max < poleCisel[i]) {
        max = poleCisel[i];
    }else{
        //iterovane cislo je mensi nez nase max, nemusime delat nic
    }
}

console.log(max);