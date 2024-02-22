let poleBarev = ["cervena", "modra", "zelena", "zluta"];
//klasicky for cyklus
for (let i = 0; i < poleBarev.length; i++) {
    console.log(poleBarev[i]);
}
console.log("-------------------------");

//forEach metoda
poleBarev.forEach((polozka) => {
    console.log(polozka);
});
console.log("-------------------------");

//for of
for (let polozka of poleBarev) {
    console.log(polozka);
}