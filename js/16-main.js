let poleBarev = ["červená", "modrá", "bílá", "žlutá", "černá", "hnědá", "zelené", "šedá", "fialová", "růžová"];
console.log(poleBarev);
console.log(poleBarev[0]);
console.log(poleBarev[1]);
console.log(poleBarev[2]);

console.log("------------------------------------------------");

let index = 0;
let pocetPrvku = poleBarev.length;
while (index < pocetPrvku) {
    console.log(poleBarev[index]);
    index++;
}

console.log("------------------------------------------------");

for (let i = 0; i < poleBarev.length; i++) {
    console.log(poleBarev[i]);
}

