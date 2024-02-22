let poleCisel =  [13, 11, 16, 14, 17, 18, 24, 26, 25, 19, 15];

for (let i = poleCisel.length - 1; i >= 0; i--) {
    console.log(poleCisel[i]);
}

console.log(poleCisel);
for (let i = poleCisel.length - 1; i >= 0; i--) {
    poleCisel.splice(i, 1);
}

console.log(poleCisel);