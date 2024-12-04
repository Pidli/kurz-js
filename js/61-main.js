//sync funkce dokud se predchozi funkce nedokonci, tak program dal nepokracuje
//vetsina funkci v JS je sync (jsou blokujici)
console.log("AAA");
console.log("BBB");
console.log("CCC");

//async funkce se spusti, ale program neceka na jeji dokonceni a spusti dalsi funkci v poradi (funkce je neblokujici)
//async funkci pozname tak, ze vraci Promise objekt nebo v argumentu prijimaji callback
//jedna se o funkce casovaci funkce nebo funkce, ktere pracuji se siti, se souborem nebo cekaji na interakci uzivatele
setTimeout(() => {
    console.log("DDD");
}, 1000 * Math.random() * 5);

setTimeout(() => {
    console.log("EEE");
}, 1000 * Math.random() * 5);

setTimeout(() => {
    console.log("FFF");
}, 1000 * Math.random() * 5);



//jak napsat aby se async sunkce spustili za sebou jako sync?
function vypisG (argCallback) {
    setTimeout(() => {
        console.log("GGG");
        argCallback();
    }, 6000 + 1000 * Math.random() * 5);
}

function vypisH (argCallback) {
    setTimeout(() => {
        console.log("HHH");
        argCallback();
    }, 6000 + 1000 * Math.random() * 5);
}

function vypisI (argCallback) {
    setTimeout(() => {
        console.log("III");
        argCallback();
    }, 6000 + 1000 * Math.random() * 5);
}


//pyramida zkazy | callback hell
vypisG(() => {
    vypisH(() => {
        vypisI(() => {});
    });
});
